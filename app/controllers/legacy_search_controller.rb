require 'net/http'
require 'uri'
require 'json'
require 'rsolr'
class LegacySearchController < ApplicationController
    def index
        puts params
        @documentId = params[:id]
        @term = params[:q]
        if @term.length != 0
            rsolr = RSolr.connect :url => 'http://solr:8983/solr/page'
            if @term != "*:*"
                @legacy_ocr_search_request= rsolr.get 'select', :params => {
                    :rows => 500,
                    :q => 'page_txt:' + @term + ' AND ' + 'pkey:' + @documentId
                } 
                legacy_ocr_search_results_unsorted = []
                for hit in @legacy_ocr_search_request['response']['docs'] do
                    stripped=hit['id'].gsub(@documentId+'.', '')
                    legacy_ocr_search_results_unsorted.append(stripped.to_i)
                end
                @legacy_ocr_search_results = legacy_ocr_search_results_unsorted.sort
                render json: @legacy_ocr_search_results
            else 
              render json: []
            end
        end
    end
end