# frozen_string_literal: true

# Blacklight controller that handles searches and document requests
class CatalogController < ApplicationController

  include Blacklight::Catalog
  include BlacklightRangeLimit::ControllerOverride

  include Blacklight::Marc::Catalog


  # If you'd like to handle errors returned by Solr in a certain way,
  # you can use Rails rescue_from with a method you define in this controller,
  # uncomment:
  #
  # rescue_from Blacklight::Exceptions::InvalidRequest, with: :my_handling_method

  configure_blacklight do |config|
    ## Specify the style of markup to be generated (may be 4 or 5)
    config.bootstrap_version = 5
    #
    ## Class for sending and receiving requests from a search index
    config.repository_class = Blacklight::Solr::Repository
    #
    ## Class for converting Blacklight's url parameters to into request parameters for the search index
    # config.search_builder_class = ::SearchBuilder
    #
    ## Model that maps search index responses to the blacklight response model
    config.response_model = Blacklight::Solr::Response
    #
    ## The destination for the link around the logo in the header
    # config.logo_link = root_path
    #
    ## Should the raw solr document endpoint (e.g. /catalog/:id/raw) be enabled
    config.raw_endpoint.enabled = false
  

    #Solr query: get select {"qt"=>"*:*", "json"=>{"query"=>{"bool"=>{"must"=>["honour", "*:*"]}}}, "facet"=>true, "facet.field"=>["format", "collection_tsim_str", "subject_ssim_str", "author_ssm_str", "subject_geo_ssim_str", "language_ssim_str", "published_ssm_str", "pub_date_si"], "f.published_ssm_str.facet.sort"=>"index", "f.published_ssm_str.facet.limit"=>11, "rows"=>10, "sort"=>"score desc, pub_date_si desc"}

    ## Default parameters to send to solr for all search-like requests. See also SearchBuilder#processed_parameters
    config.default_solr_params = {
      qt: "/query",
      q: "*:*"
    }

    # solr path which will be added to solr base url before the other solr params.
    config.solr_path = 'select'
    config.document_solr_path = 'get'

    # items to show per page, each number in the array represent another option to choose from.
    config.per_page = [10,20,50,100]

    # solr field configuration for search results/index views
    config.index.title_field = 'title_ssm'
    config.index.display_type_field = 'format'
    # config.index.thumbnail_field = 'thumbnail_path_ss'

    # The presenter is the view-model class for the page
    # config.index.document_presenter_class = MyApp::IndexPresenter

    # Some components can be configured
    # config.index.document_component = MyApp::SearchResultComponent
    # config.index.constraints_component = MyApp::ConstraintsComponent
    # config.index.search_bar_component = MyApp::SearchBarComponent
    # config.index.search_header_component = MyApp::SearchHeaderComponent
    # config.index.document_actions.delete(:bookmark)

    #config.add_results_document_tool(:bookmark, component: Blacklight::Document::BookmarkComponent, if: :render_bookmarks_control?)

    config.add_results_collection_tool(:sort_widget)
    config.add_results_collection_tool(:per_page_widget)
    config.add_results_collection_tool(:view_type_group)

    #config.add_show_tools_partial(:bookmark, component: Blacklight::Document::BookmarkComponent, if: :render_bookmarks_control?)
    #config.add_show_tools_partial(:email, callback: :email_action, validator: :validate_email_params)
    #config.add_show_tools_partial(:sms, if: :render_sms_action?, callback: :sms_action, validator: :validate_sms_params)
    config.add_show_tools_partial(:citation)

    #config.add_nav_action(:bookmark, partial: 'blacklight/nav/bookmark', if: :render_bookmarks_control?)
    #config.add_nav_action(:search_history, partial: 'blacklight/nav/search_history')

    # solr field configuration for document/show views
    # config.show.title_field = 'title_tsim'
    # config.show.display_type_field = 'format'
    # config.show.thumbnail_field = 'thumbnail_path_ss'
    #
    # The presenter is a view-model class for the page
    # config.show.document_presenter_class = MyApp::ShowPresenter
    #
    # These components can be configured
    # config.show.document_component = MyApp::DocumentComponent
    # config.show.sidebar_component = MyApp::SidebarComponent
    # config.show.embed_component = MyApp::EmbedComponent

    # solr fields that will be treated as facets by the blacklight application
    #   The ordering of the field names is the order of the display
    #
    # Setting a limit will trigger Blacklight's 'more' facet values link.
    # * If left unset, then all facet values returned by solr will be displayed.
    # * If set to an integer, then "f.somefield.facet.limit" will be added to
    # solr request, with actual solr request being +1 your configured limit --
    # you configure the number of items you actually want _displayed_ in a page.
    # * If set to 'true', then no additional parameters will be sent to solr,
    # but any 'sniffed' request limit parameters will be used for paging, with
    # paging at requested limit -1. Can sniff from facet.limit or
    # f.specific_field.facet.limit solr request params. This 'true' config
    # can be used if you set limits in :default_solr_params, or as defaults
    # on the solr side in the request handler itself. Request handler defaults
    # sniffing requires solr requests to be made with "echoParams=all", for
    # app code to actually have it echo'd back to see it.
    #
    # :show may be set to false if you don't want the facet to be drawn in the
    # facet bar
    #
    # set :index_range to true if you want the facet pagination view to have facet prefix-based navigation
    #  (useful when user clicks "more" on a large facet and wants to navigate alphabetically across a large set of results)
    # :index_range can be an array or range of prefixes that will be used to create the navigation (note: It is case sensitive when searching values)


    #config.add_facet_field 'title_tsim', label: 'Title'
    config.add_facet_field 'pub_date_si', label: 'Date Range',
      range: {
        num_segments: 10,
        assumed_boundaries: [0, Time.now.year + 2],
        segments: true,
        maxlength: 4
      }
    config.add_facet_field 'language_ssim_str', label: 'Language', limit: 20
    config.add_facet_field 'collection_tsim_str', label: 'Collection', limit: 6 # Need to figure out why old values aren't clearing
    config.add_facet_field 'subject_ssim_str', label: 'Subject', limit: 20
    config.add_facet_field 'author_ssm_str', label: 'Creator', limit: 20
    config.add_facet_field 'doc_source_tsim_str', label: 'Source', limit: 20
    #config.add_facet_field 'serial_title', label: 'Series Title', limit: 20
    config.add_facet_field 'is_serial', label: 'Is a Series'
    config.add_facet_field 'is_issue', label: 'Is an Issue'
    #config.add_facet_field 'subject_geo_ssim_str', label: 'Region'
    #config.add_facet_field 'a_query_field', pivot: ['collection_tsim_str', 'subject_ssim_str']


    # config.add_facet_field 'example_pivot_field', label: 'Pivot Field', pivot: ['format', 'language_ssim'], collapsing: true

    #config.add_facet_field 'example_query_facet_field', label: 'Publish Date', :query => {
    #   :years_5 => { label: 'within 5 Years', fq: "pub_date_ssim:[#{Time.zone.now.year - 5 } TO *]" },
    #   :years_10 => { label: 'within 10 Years', fq: "pub_date_ssim:[#{Time.zone.now.year - 10 } TO *]" },
    #   :years_25 => { label: 'within 25 Years', fq: "pub_date_ssim:[#{Time.zone.now.year - 25 } TO *]" }
    #}


    # Have BL send all facet field names to Solr, which has been the default
    # previously. Simply remove these lines if you'd rather use Solr request
    # handler defaults, or have no facets.
    config.add_facet_fields_to_solr_request!

    # solr fields to be displayed in the index (search results) view
    #   The ordering of the field names is the order of the display
    config.add_index_field 'title_ssm', label: 'Title'
    config.add_index_field 'format', label: 'Format'
    config.add_index_field 'collection_tsim', label: 'Collection'
    config.add_index_field 'subject_ssim', label: 'Subject'
    config.add_index_field 'author_ssm_str', label: 'Creator'
    config.add_index_field 'doc_source_tsim', label: 'Source'
    config.add_index_field 'pub_date_si', label: 'Date'
    config.add_index_field 'id', label: 'Item Code'
    

    # solr fields to be displayed in the show (single result) view
    #   The ordering of the field names is the order of the display
    config.add_show_field 'title_ssm', label: 'Title'
    config.add_show_field 'subtitle_tsim', label: 'Subtitle'
    config.add_show_field 'title_addl_tsim', label: 'Other Titles'
    config.add_show_field 'collection_tsim', label: 'Collection'
    config.add_show_field 'subject_ssim', label: 'Subject'
    config.add_show_field 'author_ssm_str', label: 'Creator'
    config.add_show_field 'published_ssm', label: 'Published Statement'
    config.add_show_field 'doc_source_tsim', label: 'Document Source'
    config.add_show_field 'original_version_note_tsim', label: 'Original Version Note'
    config.add_show_field 'notes_tsim', label: 'Notes'
    config.add_show_field 'access_note_tsim', label: 'Access Note'
    config.add_show_field 'rights_stat_tsim', label: 'Rights Statement'
    config.add_show_field 'language_ssim', label: 'Language'
    config.add_show_field 'pub_date_si', label: 'Date'
    config.add_show_field 'permalink_fulltext_ssm', label: 'Permalink'
    config.add_show_field 'is_serial', label: 'Is a Series'
    config.add_show_field 'is_issue', label: 'Is Issue'
    #config.add_show_field 'url_fulltext_ssm', label: 'Canadiana URL'
    #config.add_show_field 'subject_geo_ssim', label: 'Region'
    #config.add_show_field 'title_series_tsim', label: 'Series'

    
    # "fielded" search configuration. Used by pulldown among other places.
    # For supported keys in hash, see rdoc for Blacklight::SearchFields
    #
    # Search fields will inherit the :qt solr request handler from
    # config[:default_solr_parameters], OR can specify a different one
    # with a :qt key/value. Below examples inherit, except for subject
    # that specifies the same :qt as default for our own internal
    # testing purposes.
    #
    # The :key is what will be used to identify this BL search field internally,
    # as well as in URLs -- so changing it after deployment may break bookmarked
    # urls.  A display label will be automatically calculated from the :key,
    # or can be specified manually to be different.

    # This one uses all the defaults set by the solr request handler. Which
    # solr request handler? The one set in config[:default_solr_parameters][:qt],
    # since we aren't specifying it otherwise.

    #config.add_search_field 'all_fields', label: 'All Fields'

    # Now we see how to over-ride Solr request handler defaults, in this
    # case for a BL "search field", which is really a dismax aggregate
    # of Solr search fields.

    config.add_search_field('title_ssm') do |field|
      # solr_parameters hash are sent to Solr as ordinary url query params.
      field.solr_parameters = {
        df: 'title_ssm'
      }
      field.label = "Title"
    end

    config.add_search_field('full_txt') do |field|
      # solr_parameters hash are sent to Solr as ordinary url query params.
      field.solr_parameters = {
        df: 'full_txt'
      }
      field.label = "Full Text"
    end

    config.add_search_field('author_tsim') do |field|
      # solr_parameters hash are sent to Solr as ordinary url query params.
      field.solr_parameters = {
        df: 'author_tsim'
      }
      field.label = "Author"
    end


    config.add_search_field('subject_tsim') do |field|
      # solr_parameters hash are sent to Solr as ordinary url query params.
      field.solr_parameters = {
        df: 'subject_tsim'
      }
      field.label = "Subject"
    end

    config.add_search_field('id') do |field|
      # solr_parameters hash are sent to Solr as ordinary url query params.
      field.solr_parameters = {
        df: 'id'
      }
      field.label = "Item Code"
    end
    
    config.add_search_field('serial_key') do |field|
      # solr_parameters hash are sent to Solr as ordinary url query params.
      field.solr_parameters = {
        df: 'serial_key'
      }
      field.label = "Serial Code"
    end


    # "sort results by" select (pulldown)
    # label in pulldown is followed by the name of the Solr field to sort by and
    # whether the sort is ascending or descending (it must be asc or desc
    # except in the relevancy case). Add the sort: option to configure a
    # custom Blacklight url parameter value separate from the Solr sort fields.
    config.add_sort_field 'relevance', sort: 'score desc', label: 'relevance'
    config.add_sort_field 'year-desc', sort: 'pub_date_si desc', label: 'year'
    #config.add_sort_field 'author', sort: 'author_si asc', label: 'creator'
    #config.add_sort_field 'title_si asc, pub_date_si desc', label: 'title'

    # If there are more than this many search results, no spelling ("did you
    # mean") suggestion is offered.
    config.spell_max = 5

    # Configuration for autocomplete suggester
    #config.autocomplete_enabled = true
    #config.autocomplete_path = 'suggest'
    # if the name of the solr.SuggestComponent provided in your solrconfig.xml is not the
    # default 'mySuggester', uncomment and provide it below
    # config.autocomplete_suggester = 'mySuggester'
  end
end
