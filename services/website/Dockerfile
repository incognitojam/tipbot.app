# Build Stage
FROM node:lts-alpine AS build
WORKDIR /service
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
LABEL stage=build

# Production Stage
FROM nginx:stable-alpine
COPY --from=build /service/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
