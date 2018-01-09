class SessionsController < ApplicationController
  def user
    render json: current_user
  end
end
