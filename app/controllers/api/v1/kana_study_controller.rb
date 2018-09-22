class Api::V1::KanaStudyController < ApplicationController
  def index
    kana = Kana
      .order("RANDOM()")
      .limit(6)

    render json: kana
  end
end
