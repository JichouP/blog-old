FROM node:latest

MAINTAINER  JichouP

COPY . .

RUN npm ci
RUN npm run clean
RUN npm run build
RUN npm run serve
