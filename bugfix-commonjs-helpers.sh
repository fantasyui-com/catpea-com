#!/usr/bin/env bash

target=$(ls -1 docs/client/*commonjsHelpers*| head -1);
filename=$(basename -- "$target")
fixedname="${filename##_}"
find ./docs -type f -exec sed -i -e "s/${filename}/${fixedname}/g" {} \;
mv ./docs/client/$filename ./docs/client/$fixedname
