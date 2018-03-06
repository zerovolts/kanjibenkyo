class Kanji < ApplicationRecord
  def self.daily
    Kanji.find((Date.today.hash.abs % Kanji.count) + 1)
  end
end
