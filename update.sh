#!/usr/bin/env bash

cd ../warrior/
  ./build.mjs;
  ./upgrade.mjs
cd -

cp ../warrior/youtube.json static;
cp ../warrior/book.json static;
