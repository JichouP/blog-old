FROM node:latest

MAINTAINER  JichouP

WORKDIR .

RUN npm ci
RUN npm run clean
RUN npm run build
RUN npm run serve
