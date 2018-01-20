class Api::V1::KanaQuizController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    render json: KanaQuiz.begin(current_user)
  end

  def check
    quiz = KanaQuiz.find_by(id: params[:id], user_id: [:user_id])
    render json: quiz.check(params[:answers])
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
  def check_answer
    result = KanaQuiz.check_answer(kana_question_params)
    render json: result
  end

  def kana_question_params
    params.permit(:question, :answer, :question_type, :answer_type)
  end
end
