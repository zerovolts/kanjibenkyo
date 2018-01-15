class Api::V1::UserController < ApplicationController
  def show
    render json: User.first
  end
end
