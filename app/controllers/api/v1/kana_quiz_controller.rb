class Api::V1::KanaQuizController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    render json: KanaQuiz.begin(current_user)
  end

  def test
    render json: {
      id: 1,
      user: current_user,
      question_count: 10,
      questions: [
      ]
    }
  end

  #deprecated
  def quiz
    render json: KanaQuiz.filtered_question()
  end

  #deprecated
  def check
    result = KanaQuiz.check_answer(kana_quiz_params)
    render json: result
  end

  def kana_quiz_params
    params.permit(:question, :answer, :question_type, :answer_type)
  end
end
