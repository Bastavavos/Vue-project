#!/bin/sh
ROOT_DIR=/usr/share/nginx/html/assets
# Replace env vars in files served by NGINX
for file in $ROOT_DIR/*.js;

do
  sed -i "s|VITE_API_URL_PLACEHOLDER|${VITE_API_URL}|g" $file
  sed -i "s|VITE_IMAGE_BASE_URL_PLACEHOLDER|${VITE_IMAGE_BASE_URL}|g" $file
  echo "Processing $file"
done
# Let container execution proceed
exec "$@"