Rails.application.routes.draw do
  resources :games
  get '/games_api', to: "games#games_api"

  root "games#index"
end
