FROM node:19-alpine

WORKDIR /app
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm ci
