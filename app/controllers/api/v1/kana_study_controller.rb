class Api::V1::KanaStudyController < ApplicationController
  def index
    # kana = Kana.all.lazy.select do |character|
    #   character.rating < 50
    # end.first(6)

    kana = Kana
      .where(youon: nil, dakuten: false, handakuten: false)
      .order("RANDOM()")
      .limit(6)

    render json: kana
  end
end
