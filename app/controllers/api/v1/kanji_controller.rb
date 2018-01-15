class Api::V1::KanjiController < ApplicationController
  def index
    render json: Kanji.all
  end
end
