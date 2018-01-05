class Kana < ApplicationRecord
  TYPES = [:hiragana, :katakana, :romaji]

  def self.filtered_quiz(question_filters = [], answer_filters = [])
    question_type = TYPES.select {|type| !question_filters.include?(type) }.sample
    answer_type = TYPES.select do |type|
      !answer_filters.include?(type) && type != question_type
    end.sample

    self.quiz(question_type, answer_type)
  end

  def self.quiz(question_type, answer_type)
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
    correct_answer = kana[response[:answer_type]]
    is_correct = response[:answer] == correct_answer

    {is_correct: is_correct, correct_answer: correct_answer}
  end
end
