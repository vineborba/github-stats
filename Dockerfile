FROM node:14.18-alpine

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

ENTRYPOINT [ "npm", "start" ]
