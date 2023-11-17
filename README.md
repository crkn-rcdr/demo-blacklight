# README

A docker compose demo that will allow you to spin up a test instance of blacklight in a flash.

## Ruby version
3.0.3

## System dependencies
Docker, Docker-compose

## Configuration
See: https://github.com/projectblacklight/blacklight/wiki

## Deployment instructions

### Local Deployment

`docker compose up -d`

(On first run only, to get container name if your folder name is different) `docker container ls`

(On first run only) `docker exec -it demo-blacklight-solr-1 solr create_core -c blacklight`

Create full_txt field in blacklight core

(On first run only) `docker exec -it demo-blacklight-solr-1 solr create_core -c page`

Create pkey field in page core
Create page_txt field in page core

(On first run only) `docker exec -it demo-blacklight-web-1 bash`

(On first run only)
`rake solr:marc:index MARC_FILE=BlacklightTesting_GovDocs_8140Records.mrc`
`rake solr:marc:index MARC_FILE=BlacklightTesting_Map.mrc`
`rake solr:marc:index MARC_FILE=BlacklightTesting_Monographs_9_xxxx_2265Records.mrc`
`rake solr:marc:index MARC_FILE=BlacklightTesting_Serials_4796Records.mrc`

(On first run only) `docker logs demo-blacklight-web-1 --follow`

Solr instance will be running at:
http://localhost:8983

Blacklight instance will be running at:
http://localhost:3000

Go to the above link for Blacklight and run the db migrations by clicking the button.

See CRKN test data!

Notes: 
* with docker compose up, use --force-recreate if you want to reset the contents of solr
* or use this Solr API curl command:
`curl -X POST -H 'Content-Type: application/json' \
    'http://crkn-solr.c7a.ca:8983/solr/blacklight/update?commit=true' \
    -d '{ "delete": {"query":"*:*"} }'
)`

## Reference:
https://workshop.projectblacklight.org/v7.11.1/solr-in-blacklight/

