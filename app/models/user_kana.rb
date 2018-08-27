def streak_to_interval(streak)
  intervals = [
    5.seconds,
    25.seconds,
    2.minutes,
    10.minutes,
    1.hour,
    5.hours,
    1.day,
    5.days,
    25.days,
    4.months,
    2.years
  ]
  index = streak < (intervals.length - 1) ? streak : (intervals.length - 1)
  intervals[index]
end

class UserKana < ApplicationRecord
  belongs_to :user
  belongs_to :kana

  def add_time(seconds)
    self.update(total_seconds_viewed: seconds)
  end

  # pure average - low mobility when count is high; doesn't account for how recent an answer is
  # pure increment - offers little advantage over just using "streak"
  def self.calculate_rating(is_correct, rating, count)
    # if this is the first answer, set it to either 100 or 0
    if rating.nil?
      return is_correct ? 100 : 0
    end

    # 0.8 -- 0.4, 0.53, 0.6, 0.64, 0.67
    # 0.9 -- 0.45, 0.6, 0.675, 0.72
    age_weight = 0.9
    new_count = (count + 1).to_f
    # if this is the 4th answer, the old rating will have a weight of 3/4
    # and the new rating will have a weight of 1/4
    old_rating_weight = (count / new_count) * age_weight
    new_rating_weight = [0.05, 1 - old_rating_weight].max

    old_rating_component = old_rating_weight * (rating / 100.to_f)
    new_rating_component = new_rating_weight * (is_correct ? 1 : 0)

    [100, (old_rating_component + new_rating_component) * 100].min
  end

  def self.calculate_score(is_correct, score, streak, weight)
    if is_correct
      score + (streak * 20 * weight)
    else
      score + 5
    end
  end

  def recalculate(is_correct, weight = 1)
    current_time = Time.now

    if (is_correct)
      new_streak = self.streak + 1

      self.update(
        count: self.count + 1,
        correct: self.correct + 1,
        streak: new_streak,
        rating: UserKana.calculate_rating(is_correct, self.rating, self.count),
        score: UserKana.calculate_score(is_correct, self.score, new_streak, weight),
        time_of_last_review: current_time,
        time_of_next_review: current_time + streak_to_interval(self.streak)
      )
    else
      new_streak = 0

      self.update(
        count: self.count + 1,
        streak: new_streak,
        rating: UserKana.calculate_rating(is_correct, self.rating, self.count),
        score: UserKana.calculate_score(is_correct, self.score, new_streak, weight),
        time_of_last_review: current_time,
        time_of_next_review: current_time + streak_to_interval(new_streak)
      )
    end
  end
end