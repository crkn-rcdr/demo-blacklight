require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module MyNewBlacklightapp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
    config.web_console.permissions = '172.18.0.1'
    config.hosts << "172.18.0.1"
    config.hosts << "sea-lion-app-kv5jd.ondigitalocean.app"
    config.hosts << "parl-blacklight-test-bcwg7.ondigitalocean.app"
  end
end
