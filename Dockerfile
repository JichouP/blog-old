FROM node:latest

MAINTAINER  JichouP

RUN npm ci
RUN npm run clean
RUN npm run build
RUN npm run serve
