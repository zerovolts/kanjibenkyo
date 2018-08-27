class Api::V1::KanaQuizController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    KanaQuiz.delete_unfinished(current_user)
    quiz = KanaQuiz.begin(current_user)
    render json: quiz
  end

  def check
    quiz = KanaQuiz.find_by(id: params[:id], user_id: params[:user_id])

    if (params[:answers].length == quiz.total_questions)
      checked = quiz.check(current_user, params[:answers])
      render json: checked
    else
      render json: {error: "The number of answers submitted did not match the number of quiz questions."}
    end
  end

  def stats
    completed = KanaQuiz.where(is_complete: true)

    total_questions = completed.reduce(0) {|acc, quiz| acc + quiz.total_questions}
    total_correct = completed.reduce(0) {|acc, quiz| acc + quiz.total_correct}
    average = (total_questions != 0) ? ((total_correct.to_f / total_questions) * 100).floor : 0

    render json: {
      total_completed: completed.length,
      total_average: average
    }
  end
end
