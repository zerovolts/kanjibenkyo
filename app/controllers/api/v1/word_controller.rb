class Api::V1::WordController < ApplicationController
  def index
    render json: Word.all.where(jlpt: 5)
  end
end
