FROM node:latest AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=builder /app/dist/frontend/browser/ /usr/share/nginx/html
EXPOSE 80