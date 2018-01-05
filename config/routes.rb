Rails.application.routes.draw do
  root "static#index"

  namespace :api do
    namespace :v1 do
      resources :kana, only: []
      get "/kana/quiz" => "kana#quiz"
      post "/kana/check" => "kana#check"
    end
  end
end
