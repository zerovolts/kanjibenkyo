class Api::V1::WordController < ApplicationController
  skip_before_action :authenticate_request
  before_action :optionally_authenticate_request

  def index
    render json: Word.all
  end

  def jlpt
    render json: Word.all.where(jlpt: params[:jlpt])
  end

  def show
    render json: Word.find_by(word: params[:word])
  end
end
