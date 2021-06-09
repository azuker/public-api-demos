#!/usr/bin/env sh
set -eu

envsubst '${GATEWAY_REQUESTS_PER_SECOND} ${UNDERLYING_DEV_ROUTE} ${GATEWAY_DNS_RESOLVERS} ${AUTH_ENDPOINT} ${INVENTORY_API} ${ORDERS_API}' < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/app.conf

exec "$@"
