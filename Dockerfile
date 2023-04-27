FROM nginx as build

WORKDIR /usr/share/nginx/html

COPY ./pages/ .

RUN ls -alt /usr/share/nginx/html
