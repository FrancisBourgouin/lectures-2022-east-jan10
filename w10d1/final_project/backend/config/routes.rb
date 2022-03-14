Rails.application.routes.draw do
  # namespace
  # scope
  scope :api do
    namespace :v1 do
      resources :urls
    end
    resources :urls
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
