class KanaQuiz < ApplicationRecord
  belongs_to :user
  has_many :kana_quiz_questions

  def self.begin(user, total_questions=10, options={})
    quiz = KanaQuiz.create(
      user: user,
      total_questions: total_questions
    )

    questions = Kana
      .where(dakuten: false, handakuten: false, youon: nil, obsolete: false)
      .order("RANDOM()")
      .limit(total_questions)
      .map {|question| KanaQuizQuestion.new_question(quiz, question, 4)}

    quiz
  end

  def self.delete_unfinished(user)
    self.where(user: user, is_complete: false).destroy_all
  end

  def check(answers)
    checked_answers = answers.map do |answer|
      question = KanaQuizQuestion.find(answer[:id])
      question.check(answer[:choice])
      question
    end

    total_correct = checked_answers.select {|answer| answer.is_correct}.length
    self.update(total_correct: total_correct, is_complete: true)

    checked_answers
  end

  #deprecated
  def self.filtered_question(question_filters=[], answer_filters=[])
    question_type = Kana::TYPES.select {|type| !question_filters.include?(type) }.sample
    answer_type = Kana::TYPES.select do |type|
      !answer_filters.include?(type) && type != question_type
    end.sample

    self.question(question_type, answer_type)
  end

  #deprecated
  def self.question(question_type, answer_type)
    choices = Kana.order("RANDOM()").limit(4)
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
