FROM node:18-alpine

WORKDIR /app

COPY ./kenzaza/package.json ./
RUN npm install
COPY kenzaza/. .
RUN npm run build
# Production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/kenzaza/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]""