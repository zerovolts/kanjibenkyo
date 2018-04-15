class KanaQuiz < ApplicationRecord
  belongs_to :user
  has_many :kana_quiz_questions

  def self.begin(user, total_questions=10)
    quiz = KanaQuiz.create(
      user: user,
      total_questions: total_questions
    )

    questions = Kana
      .where(obsolete: false)
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

  def as_json(options = {})
    super(methods: [
      :kana_quiz_questions
    ])
  end
end
