class KanaQuizQuestion < ApplicationRecord
  belongs_to :kana_quiz
  belongs_to :question, class_name: "Kana"
  belongs_to :answer, class_name: "Kana", optional: true

  def self.new_question(kana_quiz, question, choice_count)
    question_type = Kana::TYPES.sample
    answer_type = Kana::TYPES.select {|type| type != question_type}.sample

    choices = question.get_others(choice_count - 1).to_a
      .append(question).map(&answer_type).shuffle

    KanaQuizQuestion.create(
      kana_quiz: kana_quiz,
      question: question,
      answer: nil,
      question_type: question_type,
      answer_type: answer_type,
      choices: choices
    )
  end

  def check(response)
    answer = Kana.find_by(answer_type => response)
    update(answer: answer, is_correct: self.question == answer)
    # then modify user scores?
  end

  def as_json(options = {})
    super(methods: [
      :question
    ])
  end
end
