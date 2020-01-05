FROM node:lts-alpine

ENV ROOT_DIR /tipbot
WORKDIR ${ROOT_DIR}/bases/node-template

ARG TAG=latest
ENV TIPBOT_VERSION=${TAG}
ARG GIT_SHA1=latest
ENV TIPBOT_SHA1=${GIT_SHA1}

COPY package*.json ./
RUN npm ci
COPY . .

EXPOSE 3000
LABEL traefik.enable=true \
    traefik.port=3000 \
    traefik.default.protocol=http \
    traefik.docker.network=tipbot
