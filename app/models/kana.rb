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

  def rating()
    questions = KanaQuizQuestion.where(question: self)

    num_true = questions.where(is_correct: true).length
    num_false = questions.where(is_correct: false).length
    num_total = (num_true + num_false) || 1

    (num_true / num_total.to_f * 100).round(2)
  end

  def as_json(options = {})
    super(methods: [
      :rating
    ])
  end
end
