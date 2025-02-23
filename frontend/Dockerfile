# docker build -t frontend_examen .
# docker build -t docker.io/reymon4/frontend_examen .
# docker push reymon4/frontend_examen

FROM node:lts-alpine

RUN npm install -g http-server

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ARG VUE_APP_HOST
ARG VUE_APP_PORT
ARG VUE_APP_PATH

EXPOSE 8080

CMD [ "http-server", "dist" ]