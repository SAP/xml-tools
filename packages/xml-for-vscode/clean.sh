#!/bin/bash

# Clean
rm ../language-server/xml-tools-language-server.tgz
rm ../parser/xml-tools-parser.tgz
rm -rf node_modules

# Revert to original state
git checkout package.json
yarn