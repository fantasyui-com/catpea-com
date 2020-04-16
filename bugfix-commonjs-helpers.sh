#!/usr/bin/env bash

touch ./docs/.nojekyll
touch ./.nojekyll

# problems=$(grep -R '_commonjsHelpers' docs/client/|wc -l);
# echo "Found ${problems} problems. Attempting to fix..."
# target=$(ls -1 docs/client/*commonjsHelpers*| head -1);
# filename=$(basename -- "$target")
# fixedname="${filename##_}"
# find ./docs -type f -exec sed -i -e "s/${filename}/${fixedname}/g" {} \;
# mv -f ./docs/client/$filename ./docs/client/$fixedname
# fixes=$(grep -R '_commonjsHelpers' docs/client/|wc -l);
# echo "Found ${fixes} problems after fixing. Bye."

# problems=$(grep -R '_createCompounder' docs/client/|wc -l);
# echo "Found ${problems} problems. Attempting to fix..."
# target=$(ls -1 docs/client/*createCompounder*| head -1);
# filename=$(basename -- "$target")
# fixedname="${filename##_}"
# find ./docs -type f -exec sed -i -e "s/${filename}/${fixedname}/g" {} \;
# find ./docs -type f -exec sed -i -e "s/_createCompounder/createCompounder/g" {} \;
# mv -f ./docs/client/$filename ./docs/client/$fixedname
# fixes=$(grep -R '_createCompounder' docs/client/|wc -l);
# echo "Found ${fixes} problems after fixing. Bye."
