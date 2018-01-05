class Api::V1::KanaController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def quiz
    render json: Kana.filtered_quiz
  end

  def check
    result = Kana.check_quiz(kana_params)
    render json: result
  end

  def kana_params
    params.permit(:question, :answer, :question_type, :answer_type)
  end
end
