class Kana < ApplicationRecord
  has_many :user_kana

  TYPES = [:hiragana, :katakana, :romaji]

  def get_others(count)
    self.other_kana
      .order("RANDOM()")
      .limit(count)
  end

  def other_kana()
    Kana.where.not(hiragana: self.hiragana)
  end
  
  def self.ready_for_review(user, count)
    # all kana that currently need to be reviewed
    UserKana.where(
      "user_id = :user and time_of_next_review < :time",
      {user: user, time: Time.now}
    ).order(:time_of_next_review).limit(count).map(&:kana)
  end

  def self.not_seen(user)
    Kana.includes(:user_kana).where(user_kana: {kana: nil})
  end

  def self.next_kana(user, count)
    kana_for_review = self.ready_for_review(user, count)
    # if there is extra space after reviewing, fill with unseen kana
    extra_kana = self.not_seen(user).limit(count - kana_for_review.length)
    kana_for_review + extra_kana
  end

  def rating
    self.user_kana.first&.rating || nil
  end

  def as_json(options = {user: nil})
    super.merge(
      stats: UserKana.find_by(
        user: options[:user],
        kana: self
      ).as_json || {}
    )
  end
end
