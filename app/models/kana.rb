class Kana < ApplicationRecord
  TYPES = [:hiragana, :katakana, :romaji]

  def get_others(count)
    Kana.where(dakuten: self.dakuten).where.not(hiragana: self.hiragana, youon: !self.youon)
      .order("RANDOM()")
      .limit(count)
  end
end
