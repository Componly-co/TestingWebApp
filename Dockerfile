### STAGE 1: Build ###
FROM node:22-alpine3.19 AS build
ARG ENV=production
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=$ENV

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html