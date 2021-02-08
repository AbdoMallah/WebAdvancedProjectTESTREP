FROM node:15.7.0

WORKDIR /the-website

COPY package*.json ./

RUN npm install

COPY src src

CMD npm run start