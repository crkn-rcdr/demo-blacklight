FROM ruby:3.0.3

RUN apt-get update; \
    apt-get install -y curl gnupg; \
    curl -sL https://deb.nodesource.com/setup_8.x | bash -; \
    apt-get install -y nodejs; \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY Gemfile .

RUN bundle install
RUN gem install devise devise-guests

RUN rails generate blacklight:install --devise --marc --solr_version=latest
RUN rails shakapacker:install
RUN rails shakapacker:compile

COPY . .

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]