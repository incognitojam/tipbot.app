FROM node:lts-alpine

ENV ROOT_DIR /tipbot
WORKDIR ${ROOT_DIR}/bases/node-template

COPY package*.json ./
RUN npm ci
COPY . .
