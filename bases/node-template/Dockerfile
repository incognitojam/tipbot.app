FROM node:lts-alpine

ARG GIT_SHA1=latest
ARG TAG=latest

ENV TIPBOT_SHA1 ${GIT_SHA1}
ENV TIPBOT_VERSION ${TAG}
ENV ROOT_DIR /tipbot

WORKDIR ${ROOT_DIR}/bases/node-template

COPY package*.json ./
RUN npm ci
COPY . .
