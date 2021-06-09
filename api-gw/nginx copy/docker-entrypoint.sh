#!/usr/bin/env sh
set -eu

envsubst '${KEYCLOAK_HOST} ${KEYCLOAK_PORT} ${GATEWAY_CLIENT_ID} ${GATEWAY_CLIENT_SECRET} ${UNDERLYING_ROUTE}' < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/app.conf

exec "$@"
