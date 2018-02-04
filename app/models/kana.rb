class Kana < ApplicationRecord
  TYPES = [:hiragana, :katakana, :romaji]

  def get_others(count)
    self.same_class
      .order("RANDOM()")
      .limit(count)
  end

  def same_class()
    if (self.youon == nil)
      Kana
        .where(youon: nil)
        .where.not(hiragana: self.hiragana)
    else
      Kana.where.not(hiragana: self.hiragana, youon: nil)
    end
  end
end
