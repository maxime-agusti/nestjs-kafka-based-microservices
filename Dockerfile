FROM node:14

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN yarn install
