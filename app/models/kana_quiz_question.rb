class KanaQuizQuestion < ApplicationRecord
  belongs_to :kana_quiz
  belongs_to :kana
end
