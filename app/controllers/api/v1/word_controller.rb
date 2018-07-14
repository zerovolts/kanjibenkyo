class Api::V1::WordController < ApplicationController
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
