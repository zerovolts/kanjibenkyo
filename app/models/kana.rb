class Kana < ApplicationRecord
  TYPES = [:hiragana, :katakana, :romaji]

  def self.quiz(question_type = nil, answer_type = nil)
    question_type = question_type || TYPES.sample
    answer_type = answer_type || TYPES.select {|type| type != question_type}.sample
    choices = self.order("RANDOM()").limit(4)

    question = choices.sample[question_type]
    answers = choices.map(&answer_type)

    {
      question: question,
      answers: answers,
      question_type: question_type,
      answer_type: answer_type
    }
  end

  def self.check_quiz(response)
    # {question: "あ", answer: "ア", question_type: :hiragana, answer_type: :katakana}
    kana = Kana.find_by(response[:question_type] => response[:question])
    if kana[response[:answer_type]] == response[:answer]
      true
    else
      false
    end
  end
end
