class Api::V1::KanaQuizController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def quiz
    render json: KanaQuiz.filtered_quiz()
  end

  def check
    result = KanaQuiz.check_quiz(kana_quiz_params)
    render json: result
  end

  def kana_quiz_params
    params.permit(:question, :answer, :question_type, :answer_type)
  end
end
