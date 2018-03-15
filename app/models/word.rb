class Word < ApplicationRecord

  def characters
    self.word.chars.map do |character|
      Kana.find_by(hiragana: character) || Kanji.find_by(character: character)
    end
  end
end
