require 'view_component/version'
class ViewerComponent < ViewComponent::Base
    def initialize(documentId:)
        @documentId = documentId
    end
end