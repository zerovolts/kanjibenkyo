Rails.application.routes.draw do
  root "static#index"

  post "/authenticate" => "authentication#authenticate"

  namespace :api do
    namespace :v1 do
      post "/quiz/kana" => "kana_quiz#create"
      post "/quiz/kana/stats" => "kana_quiz#stats"
      post "/quiz/kana/check" => "kana_quiz#check"

      post "/study/kana" => "kana_study#index"

      post "/kana" => "kana#index"
      post "/kana/random" => "kana#random"
      post "/kana/:kana" => "kana#show"

      post "/kanji" => "kanji#index"
      post "/kanji/daily" => "kanji#daily"
      post "/kanji/:kanji" => "kanji#show"

      post "/words" => "word#index"
      post "/words/jlpt/:jlpt" => "word#jlpt"
      post "/words/:word" => "word#show"

      post "/user/:login" => "user#show"
    end
  end

  get "*path" => "static#index", constraints: lambda { |req| !req.xhr? }
end
