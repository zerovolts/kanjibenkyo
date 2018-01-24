Rails.application.routes.draw do
  root "static#index"

  get "/current-user" => "sessions#user"

  namespace :api do
    namespace :v1 do
      get "/quiz/kana" => "kana_quiz#create"
      post "/quiz/kana/check" => "kana_quiz#check"

      get "/kana" => "kana#index"
      get "/kana/random" => "kana#random"
      get "/kana/:kana" => "kana#show"

      get "/kanji" => "kanji#index"

      get "/user/:login" => "user#show"
    end
  end

  get "*path" => "static#index"
end
