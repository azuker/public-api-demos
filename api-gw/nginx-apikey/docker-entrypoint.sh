#!/usr/bin/env sh
set -eu

envsubst '${AUTH_URL} ${GATEWAY_REQUESTS_PER_SECOND} ${INVENTORY_API} ${ORDERS_API}' < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/app.conf

exec "$@"
