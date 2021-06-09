FROM nginx:alpine as release

WORKDIR /usr/src/app/

RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx
COPY routes.conf /etc/nginx
COPY app-template.conf /etc/nginx/conf.d/app.conf.template
COPY docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
