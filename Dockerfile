FROM node:12-slim

WORKDIR /code
COPY package.json /code

RUN npm install

CMD npm run start:dev
