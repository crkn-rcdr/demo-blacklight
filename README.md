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
`rake solr:marc:index MARC_FILE=test.mrc`

(On first run only) `docker logs demo-blacklight-web-1 --follow`

Solr instance will be running at:
http://localhost:8983

Blacklight instance will be running at:
http://localhost:3000

Swift will be running at:
http://localhost:8080
(See docs for more info: https://hub.docker.com/r/jeantil/openstack-swift-keystone-docker/)

Go to the above link for Blacklight and run the db migrations by clicking the button.

See CRKN test data!

Notes: 
* with docker compose up, use --force-recreate if you want to reset the contents of solr
* or use this Solr API curl command:
`curl -X POST -H 'Content-Type: application/json' 'http://crkn-solr.c7a.ca:8983/solr/blacklight/update?commit=true' -d '{ "delete": {"query":"*:*"} }'`
`curl -X POST -H 'Content-Type: application/json' 'http://localhost:8983/solr/blacklight/update?commit=true' -d '{ "delete": {"query":"*:*"} }'`
`curl -X POST -H 'Content-Type: application/json' 'http://blacklight.crkn-demo-test.ca:8983/solr/blacklight/update?commit=true' -d '{ "delete": {"query":"*:*"} }'`


To install new javascript libraries enter the docker container.
`docker exec -it demo-blacklight-web-1 bash`

Then, run the importmap script, ex:
`./bin/importmap pin react`


Then remember to copy the contents of the new importmap file to your local machine.
`cat config/importmap.rb`
`docker cp demo-blacklight-web-1:/app/vendor/javascript/ ./vendor/javascript`

Or, add manually:
pin "mirador", to: "https://unpkg.com/mirador@latest/dist/mirador.min.js"
pin "mirador-image-tools", to: "https://unpkg.com/mirador-image-tools@0.11.0/es/index.js"

Then download and add files to vendor/javascript.

## Reference:
https://workshop.projectblacklight.org/v7.11.1/solr-in-blacklight/

Couldn't find any packages in ["@material-ui/icons"] on jsdelivr
Couldn't find any packages in ["@material-ui/lab"] on jspm
Couldn't find any packages in ["@researchgate/react-intersection-observer"] on jspm
Couldn't find any packages in ["isomorphic-unfetch"] on jspm
Couldn't find any packages in ["jss-rtl"] on jspm
Couldn't find any packages in ["react-aria-live"] on jspm
Couldn't find any packages in ["react-beautiful-dnd"] on jspm
Couldn't find any packages in ["react-i18next"] on jspm
Couldn't find any packages in ["react-mosaic-component"] on jspm
Couldn't find any packages in ["react-sizeme"] on jspm
Couldn't find any packages in ["react-window"] on jspm
Couldn't find any packages in ["redux-saga"] on jspm
Couldn't find any packages in ["reselectuuid"] on jspm