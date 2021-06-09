# FROM nginx:alpine as release

# WORKDIR /usr/src/app/

# # RUN rm /etc/nginx/conf.d/default.conf
# RUN rm /etc/nginx/nginx.conf
# COPY nginx.conf /etc/nginx
# COPY app.conf /etc/nginx/conf.d/
# COPY introspect.js /etc/nginx/conf.d/

FROM nginx:alpine as release

WORKDIR /usr/src/app/

RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx
COPY introspect.js /etc/nginx/conf.d/
COPY app.conf.template /etc/nginx/conf.d/
COPY docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
