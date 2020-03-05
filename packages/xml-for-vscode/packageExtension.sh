#!/bin/bash

# clean
rm -rf ./node_modules

# external deps
npm install

# prepare "lerna workspace deps"
cd ../language-server
yarn pack -f xml-tools-language-server.tgz
cd ../parser
yarn pack -f xml-tools-parser.tgz

# install "lerna workspace deps"
cd ../xml-for-vscode
ls ../language-server
npm ci install ../language-server/xml-tools-language-server.tgz
npm ci install ../parser/xxaml-tools-parser.tgz