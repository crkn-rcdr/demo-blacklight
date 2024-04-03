require 'view_component/version'

class LegacyOcrSearchComponent < ViewComponent::Base
    def initialize(documentId:, term:)
        @documentId = documentId
        @term = term
        puts term.length
        if @term.length != 0
            rsolr = RSolr.connect :url => 'http://blacklight.crkn-demo-test.ca:8983/solr/page'
            if term != "*:*"
                @legacy_ocr_search_request= rsolr.get 'select', :params => {
                    :rows => 500,
                    :q => 'page_txt:' + term + ' AND ' + 'pkey:' + @documentId
                } 
                legacy_ocr_search_results_unsorted = []
                for hit in @legacy_ocr_search_request['response']['docs'] do
                    stripped=hit['id'].gsub(@documentId+'.', '')
                    legacy_ocr_search_results_unsorted.append(stripped.to_i)
                end
                @legacy_ocr_search_results = legacy_ocr_search_results_unsorted.sort
            else 
                puts "No"
            end
        end
    end
end