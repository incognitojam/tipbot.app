ARG TAG=latest

FROM tipbot/node-template:${TAG}

ENV TIPBOT_SERVICE coin

WORKDIR ${ROOT_DIR}/services/${TIPBOT_SERVICE}

COPY package*.json ./
RUN npm ci
COPY . .

USER node
EXPOSE 3000
CMD ["node", "src/index.js"]
