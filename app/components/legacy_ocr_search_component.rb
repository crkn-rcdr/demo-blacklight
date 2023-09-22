require 'view_component/version'
class LegacyOcrSearchComponent < ViewComponent::Base
    def initialize(documentId:, term:)
        @documentId = documentId
        @term = term
        rsolr = RSolr.connect :url => 'http://tokaji.tor.c7a.ca:8983/solr/cosearch2'
        @legacy_ocr_search_request= rsolr.get 'select', :params => {
            :q => 'tx:' + term + ' AND ' + 'pkey:' + 'oocihm.' + @documentId
        } 
        puts "test"
        puts @legacy_ocr_search_request['response']['docs']
        @legacy_ocr_search_results = @legacy_ocr_search_request['response']['docs']
    end
end