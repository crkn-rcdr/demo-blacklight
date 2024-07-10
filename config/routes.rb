Rails.application.routes.draw do
  get 'download/:filename', to: 'downloads#index'
  get 'legacy/:id', to: 'legacy_search#index'
  get 'dl/:id', to: 'item_downloads#index', :constraints  => { :id => /[0-z\.]+/ }

  mount Blacklight::Engine => '/'
  root to: "pages#home"
  concern :marc_viewable, Blacklight::Marc::Routes::MarcViewable.new
  concern :searchable, Blacklight::Routes::Searchable.new
  resource :catalog, only: [:index], as: 'catalog', path: '/catalog', controller: 'catalog' do
    concerns :searchable
  end

  concern :exportable, Blacklight::Routes::Exportable.new

  resources :solr_documents, only: [:show], path: '/catalog', controller: 'catalog', id: /[^\/]+/ do
    concerns [:exportable, :marc_viewable]
  end

  resources :bookmarks do
    concerns :exportable

    collection do
      delete 'clear'
    end
  end
end
