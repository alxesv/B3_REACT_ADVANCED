# Build stage
FROM node:18-alpine as build-stage
WORKDIR /app
# Change the directory to where your React app is located
COPY kenzaza/package*.json ./kenzaza/
WORKDIR /app/kenzaza
RUN npm install
COPY kenzaza/. .
RUN npm run build
# Production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/kenzaza/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]