require 'view_component/version'
require 'uri'
require 'net/http'
require "json"
class DocumentDownloadsComponent < ViewComponent::Base
    def initialize(documentId:, prefix:, pageNum:)
        @documentId = documentId
        @prefix = prefix
        @pageNum = pageNum
        @manifestUrl = "https://www.canadiana.ca/iiif/"+prefix+"."+documentId+"/manifest"
        # Get manifest, compile list of canvases...
        uri = URI(@manifestUrl)
        res = Net::HTTP.get_response(uri)
        if res.is_a?(Net::HTTPSuccess)
            result = JSON.parse(res.body)
            # https://image-tor.canadiana.ca/iiif/2/69429%2Fc0dn3zv0nx2t/full/max/0/default.jpg
            @canvasImageUrl = result["items"][pageNum.to_i-1]["items"][0]["items"][0]["body"]["id"]
            puts @canvasImageUrl
            #https://swift.canadiana.ca/v1/AUTH_crkn/access-files/69429/c0dn3zv0nx2t.pdf
            @canvasId = @canvasImageUrl.gsub('https://image-tor.canadiana.ca/iiif/2/69429%2F', "").gsub("/full/max/0/default.jpg", "")
            puts @canvasId
            @canvasPdfUrl = "https://localhost:8080/v1/AUTH_crkn/access-files/69429/" + @canvasId + ".pdf"
            puts @canvasPdfUrl
            # https://swift.canadiana.ca/v1/AUTH_crkn/access-files/69429/m07940r9qp4n.pdf?filename=oocihm.76481.pdf
            # TODO resolver ~ noid => slug vice versa
            @manifestPdfUrl = "https://localhost:8080/v1/AUTH_crkn/access-files/69429/" + prefix+"."+documentId + ".pdf"
            puts @canvasPdfUrl
        end

        #@canvasPdfUrl = 
        #@canvasImageUrl = 
        #@manifestPdfUrl = 

    end
end