# Build Stage
FROM node:lts-alpine AS build
WORKDIR /service
COPY package*.json ./
RUN npm ci --only production
COPY . .
LABEL stage=build

# Production Stage
FROM node:lts-alpine
EXPOSE 3000
WORKDIR /service
COPY --from=build /service /service
USER node
CMD ["node", "index.js"]
