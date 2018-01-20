class Kana < ApplicationRecord
  TYPES = [:hiragana, :katakana, :romaji]

  def get_others(count)
    Kana.where(dakuten: self.dakuten, youon: self.youon).where.not(hiragana: self.hiragana)
      .order("RANDOM()")
      .limit(count)
  end
end
