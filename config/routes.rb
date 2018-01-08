Rails.application.routes.draw do
  root "static#index"

  namespace :api do
    namespace :v1 do
      #resources :kana, only: [:show]
      get "/quiz/kana" => "kana_quiz#quiz"
      post "/quiz/kana/check" => "kana_quiz#check"

      get "/kana" => "kana#index"
      get "/kana/random" => "kana#random"
      get "/kana/:kana" => "kana#show"
    end
  end
end
