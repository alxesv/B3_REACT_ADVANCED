FROM node:18-alpine

WORKDIR /app

COPY ./kenzaza/package.json ./
RUN npm install

COPY ./kenzaza .

EXPOSE 3000

CMD ["npm", "start"]