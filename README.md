# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

Local Deployment:

docker compose up -d

(On first run only)

docker container ls

docker exec -it my_new_blacklightapp-solr-1 solr create_core -c blacklight

docker exec -it my_new_blacklightapp-web-1 bash 

rake solr:marc:index MARC_FILE=test.mrc

docker logs my_new_blacklightapp-web-1 --follow


Go to:
http://localhost:3000

Run the db migrations by clicking the button

See CRKN test data!

Note: (—force-recreate if you want to reset the contents of solr, or use
curl -X POST -H 'Content-Type: application/json' \
    'http://localhost:8983/solr/blacklight/update?commit=true' \
    -d '{ "delete": {"query":"*:*"} }'
)

