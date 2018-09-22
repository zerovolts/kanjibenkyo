class Api::V1::KanaController < ApplicationController
  skip_before_action :authenticate_request
  before_action :optionally_authenticate_request

  def index
    if @current_user
      kana_list = Kana.all.as_json(user: @current_user)
    else
      kana_list = Kana.all
    end

    render json: kana_list
  end

  def show
    kana = Kana
      .find_by(hiragana: params[:kana])
      .as_json(user: @current_user)
    render json: kana
  end

  def random
    render json: Kana.order("RANDOM()").first
  end
end
