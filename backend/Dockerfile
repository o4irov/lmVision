FROM node:alpine as build

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 8000 
CMD [ "npm", "start" ]