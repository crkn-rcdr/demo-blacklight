# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

## Ruby version
3.0.3

## System dependencies
Docker, Docker-compose

## Configuration
See: https://github.com/projectblacklight/blacklight/wiki

## Deployment instructions

### Local Deployment

docker compose up -d

(On first run only, to get container name) docker container ls

(On first run only) docker exec -it demo-blacklight-solr-1 solr create_core -c blacklight

(On first run only) docker exec -it demo-blacklight-web-1 bash 

(On first run only) rake solr:marc:index MARC_FILE=test.mrc

(On first run only) docker logs demo-blacklight-web-1 --follow

Go to:
http://localhost:3000

Run the db migrations by clicking the button

See CRKN test data!

Note: (—force-recreate if you want to reset the contents of solr, or use
curl -X POST -H 'Content-Type: application/json' \
    'http://localhost:8983/solr/blacklight/update?commit=true' \
    -d '{ "delete": {"query":"*:*"} }'
)

Reference:
https://workshop.projectblacklight.org/v7.11.1/solr-in-blacklight/

