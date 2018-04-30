FROM node:9-alpine

ENV NODE_ENV production

RUN mkdir /app

WORKDIR /app

COPY yarn.lock /app
COPY package.json /app

RUN yarn install

COPY . /app

RUN yarn run build

EXPOSE 3000

CMD ["yarn", "start"]