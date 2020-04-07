#!/usr/bin/env bash

problems=$(grep -R '_commonjsHelpers' docs/client/|wc -l);
echo "Found ${problems} problems. Attempting to fix..."
target=$(ls -1 docs/client/*commonjsHelpers*| head -1);
filename=$(basename -- "$target")
fixedname="${filename##_}"
find ./docs -type f -exec sed -i -e "s/${filename}/${fixedname}/g" {} \;
mv ./docs/client/$filename ./docs/client/$fixedname
fixes=$(grep -R '_commonjsHelpers' docs/client/|wc -l);
echo "Found ${fixes} problems after fixing. Bye."
