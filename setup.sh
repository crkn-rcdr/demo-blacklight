#!/bin/bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash 
source ~/.bashrc 
nvm install 18
corepack enable
npm install --global yarn
# (n/n/n/y) 
rails shakapacker:install 
yarn install 
rails shakapacker:compile
rails server -b "0.0.0.0"