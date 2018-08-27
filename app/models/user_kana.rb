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
  index = streak > (intervals.length - 1) ? streak : (intervals.length - 1)
  intervals[index]
end

class UserKana < ApplicationRecord
  belongs_to :user
  belongs_to :kana

  def add_time(seconds)
    self.update(total_seconds_viewed: seconds)
  end

  def self.calculate_rating(is_correct, rating, count, streak)
    # if this is the first answer, set it to either 100 or 0
    if rating.nil?
      return is_correct ? 100 : 0
    end

    new_count = (count + 1).to_f
    # if this is the 4th answer, the old rating will have a weight of 3/4
    # and the new rating will have a weight of 1/4
    old_rating_weight = count / new_count

    if is_correct
      new_streak = streak + 1
      new_rating_weight = [25, (1 / new_count) * new_streak * 100].min
      [100, (old_rating_weight * rating) + new_rating_weight].min
    else
      new_rating_weight = [25, (1 / new_count) * 100].min
      [0, (old_rating_weight * rating) - new_rating_weight].max
    end
  end

  def calculate_score(is_correct, score, streak, weight)
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
        rating: calculate_rating(is_correct, self.rating, self.count, self.streak),
        score: calculate_score(is_correct, self.score, new_streak, weight),
        time_of_last_review: current_time,
        time_of_next_review: current_time + streak_to_interval(self.streak)
      )
    else
      new_streak = 0

      self.update(
        count: self.count + 1,
        streak: 0,
        rating: calculate_rating(is_correct, self.rating, self.count, self.streak),
        score: calculate_score(is_correct, self.score, new_streak, weight),
        time_of_last_review: current_time,
        time_of_next_review: current_time + streak_to_interval(new_streak)
      )
    end
  end
end