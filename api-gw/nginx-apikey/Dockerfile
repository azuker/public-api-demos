FROM nginx:alpine as release

WORKDIR /usr/src/app/

RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx
COPY introspect.js /etc/nginx/conf.d/
COPY apikey-to-email-map.conf /etc/nginx/includes/
COPY apikey-to-userid-map.conf /etc/nginx/includes/
COPY app-template.conf /etc/nginx/conf.d/app.conf.template
COPY docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
