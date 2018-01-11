class KanaQuiz < ApplicationRecord
  has_many :kana_quiz_questions

  def self.begin(user, question_count=10, level=0, options={})
    quiz = KanaQuiz.create(
      user: user,
      question_count: question_count
    )


  end

  #deprecated
  def self.filtered_question(question_filters=[], answer_filters=[], level=0)
    question_type = Kana::TYPES.select {|type| !question_filters.include?(type) }.sample
    answer_type = Kana::TYPES.select do |type|
      !answer_filters.include?(type) && type != question_type
    end.sample

    self.question(question_type, answer_type, level)
  end

  #deprecated
  def self.question(question_type, answer_type, level)
    choices = Kana.where(["level <= ?", level]).order("RANDOM()").limit(4)
    question = choices.sample[question_type]
    answers = choices.map(&answer_type)

    {
      question: question,
      answers: answers,
      question_type: question_type,
      answer_type: answer_type
    }
  end

  #deprecated
  def self.check_answer(response)
    # {question: "あ", answer: "ア", question_type: :hiragana, answer_type: :katakana}
    kana = Kana.find_by(response[:question_type] => response[:question])
    correct_answer = kana[response[:answer_type]]
    is_correct = response[:answer] == correct_answer

    {is_correct: is_correct, correct_answer: correct_answer}
  end

  def as_json(options = {})
    super(methods: [
      :kana_quiz_questions
    ])
  end
end
