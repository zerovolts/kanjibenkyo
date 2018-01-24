class Api::V1::KanaQuizController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    render json: KanaQuiz.begin(current_user)
  end

  def check
    quiz = KanaQuiz.find_by(id: params[:id], user_id: [:user_id])
    render json: quiz.check(params[:answers])
  end
end
