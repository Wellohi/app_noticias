FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g json-server

COPY db.json ./

EXPOSE 3000

CMD ["json-server", "--watch", "db.json"]