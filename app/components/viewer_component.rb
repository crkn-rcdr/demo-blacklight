require 'view_component/version'
class ViewerComponent < ViewComponent::Base
    def initialize(documentId:)
        @documentId = documentId
        puts @documentId
    end
end