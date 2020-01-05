# Build Stage
FROM node:lts-alpine AS build
WORKDIR /service
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Stage
FROM nginx:stable-alpine

EXPOSE 80
LABEL traefik.backend=website traefik.port=80 traefik.default.protocol=http traefik.frontend.rule=Host:localhost,tipbot.app

COPY --from=build /service/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
