require 'net/http'
require 'uri'
require 'json'
require 'openssl'

class ItemDownloadsController < ApplicationController
    def index
        #http://localhost:3000/dl/oocihm.8_00001_1
        #https://github.com/crkn-rcdr/cap/blob/2cea946258b7474dd30bc6a1428b62025e6ac29a/CAP/lib/CIHM/Access/Presentation/SwiftClient.pm#L52
        @documentId            = params[:id]
        key                    = "J?E7Fc}4F+jeaWN@" #ENV["cappassword "]
        expires                = (Time.now.to_i + 86400).to_s
        swift_uri              = "https://swift.canadiana.ca"


        doc_pdf_uri            = ""
        canvas_download_uris   = {}

        #https://swift.canadiana.ca/v1/AUTH_crkn/access-files/69429/c0hh6c43gm7w.pdf?filename=oocihm.8_00001_1.1.pdf&temp_url_expires=1720704856&temp_url_sig=03086e0b6ea40dad9d146a0b7e4ab329861c34c7
        #https://swift.canadiana.ca/v1/AUTH_crkn/access-files/69429/c0hh6c43gm7w.pdf?filename=oocihm.8_00001_1.1.pdf&temp_url_expires=1720716848&temp_url_sig=4995770b5f16888fff31bd8d1ddb2bca9c295017
        uri = URI('https://www.canadiana.ca/iiif/'+@documentId+'/manifest')
        res = Net::HTTP.get(uri)
        if res 
            puts res  
            result = JSON.parse(res)
            #"label": {
            #    "en": [
            #    "Creator"
            #    ]
            #},
            #"value": {
            #    "en": [
            #    "Glindoni, Henry Gillard, 1852-1913"
            #    ]
            #}
            
            documentNoid = ""
            result['metadata'].each do |metadata|
                if metadata['label']['none']
                    documentNoid = metadata['value']['none']
                end
            end

            if documentNoid.length
                expires                = Time.now.to_i + 86400  # expires in a day
                path                   = File.join("/v1/AUTH_crkn/access-files", "/#{documentNoid}.pdf")
                payload                = "GET\n#{expires}\n#{path}"
                digest                 = OpenSSL::Digest.new('sha1')
                signature              = OpenSSL::HMAC.hexdigest(digest, key, payload)
                uri_suffix             = "&temp_url_expires=#{expires}&temp_url_sig=#{signature}"
                doc_pdf_uri            = "#{swift_uri}#{path}?filename=#{@documentId}.pdf#{uri_suffix}"
            end 

            canvasNumber = 0
            result['items'].each do |canvas|
                canvasNumber = canvasNumber + 1

                match = canvas['thumbnail'][0]['id'].match(%r{2/(.*?)/full})
                if match
                    extracted_string = match[1]
                    canvasId = extracted_string.gsub('%2F', '/')
                    expires                = Time.now.to_i + 86400  # expires in a day
                    path                   = File.join("/v1/AUTH_crkn/access-files", "/#{canvasId}.pdf")
                    puts path
                    payload                = "GET\n#{expires}\n#{path}"
                    digest                 = OpenSSL::Digest.new('sha1')
                    signature              = OpenSSL::HMAC.hexdigest(digest, key, payload)
                    uri_suffix             = "&temp_url_expires=#{expires}&temp_url_sig=#{signature}"
                    canvas_pdf_uri         = "#{swift_uri}#{path}?filename=#{@documentId}.#{canvasNumber}.pdf#{uri_suffix}"
                    canvas_download_uris[canvas['id']] = {
                        "canvasImageUri" => canvas['thumbnail'][0]['id'], #.force_encoding("ISO-8859-1").encode("UTF-8"), 
                        "canvasPdfUri"   => canvas_pdf_uri #.force_encoding("ISO-8859-1").encode("UTF-8")
                    } 
                end
            end
        end
        render :json => {"canvasDownloadUris"  => canvas_download_uris, "docPdfUri" => doc_pdf_uri}
    end
end