FROM node:16.10.0-alpine3.11

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]