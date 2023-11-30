require 'net/http'
require 'uri'
require 'json'
class DownloadsController < ApplicationController
    def index
        # Step 1 - Gain an auth token
        # Step 2 - Try to get the file contents
        # Step 3 - Send the file contents to the user
        puts params[:filename]
        send_file Rails.root.join("public/access-files/69429", params[:filename] + ".pdf"), type: "application/pdf", disposition: "inline"
    end
end