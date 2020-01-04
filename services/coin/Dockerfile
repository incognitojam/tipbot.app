# Build Stage
FROM tipbot/node-template AS build

WORKDIR ${ROOT_DIR}/services/coin

COPY package*.json ./
RUN npm ci
COPY . .

# Production Stage
FROM node:lts-alpine

ENV ROOT_DIR /tipbot
COPY --from=build ${ROOT_DIR} ${ROOT_DIR}
WORKDIR ${ROOT_DIR}/services/coin

USER node
EXPOSE 3000
CMD ["node", "src/index.js"]
