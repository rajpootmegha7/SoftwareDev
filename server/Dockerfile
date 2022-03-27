# Dockerfile for Node Express Backend

FROM node:alpine

# Working directory for backend
WORKDIR /app

COPY package-lock.json ./
COPY package.json ./

###  Installing dependencies

RUN npm install

# copy local files to app folder
COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]