Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: 'sessions#logout'
  get :logged_in, to: 'sessions#logged_in'
  resources :tasks
  resources :categories
  get '/categories_user/:user_id', to: 'categories#get_all_by_id'
  get '/tasks_user/:user_id', to: 'tasks#get_all_by_id'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
