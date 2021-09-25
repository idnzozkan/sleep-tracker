# the build process
FROM node:16.10.0-alpine3.11 as BUILDER

WORKDIR /app

COPY package.json package-lock.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

# the production environment
FROM node:alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=BUILDER /app/build ./

EXPOSE 5000

CMD serve -s 