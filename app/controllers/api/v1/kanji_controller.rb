class Api::V1::KanjiController < ApplicationController
  def index
    render json: Kanji.all
  end

  def show
    render json: Kanji.find_by(character: params[:kanji])
  end

  def daily
    render json: Kanji.daily
  end
end
