Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root to: 'cocktails#index'
  # get 'cocktails/new', to: 'cocktails#new'
  # get 'cocktails/:id', to: 'cocktails#show', as: :cocktail
  # post 'cocktails', to: 'cocktails#create'

  # get 'doses/new', to: 'doses#new'
  # post 'doses', to: 'doses#create'
  # delete 'doses/:id', to: 'doses#destroy'
  get root, to: "cocktails#index"
  resources :cocktails, only: [:new, :show, :index, :create] do
    resources :doses, only: [:new, :create]
  end

  resources :doses, only: :destroy
end
