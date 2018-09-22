class Api::V1::KanjiController < ApplicationController
  skip_before_action :authenticate_request
  before_action :optionally_authenticate_request

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
