class Api::V1::KanaController < ApplicationController

  def index
    render json: Kana.all
  end

  def show
    render json: Kana.find_by(hiragana: params[:kana])
  end

  def random
    render json: Kana.order("RANDOM()").first
  end
end
