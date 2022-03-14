Rails.application.routes.draw do
  resources :urls
  
  resources :users do
    resources :urls
  end

  get '/u/:short_url', to: 'urls#visit_long_url'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
