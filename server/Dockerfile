# Dockerfile for Node Express Backend

FROM node:alpine

# Working directory for backend
WORKDIR /app

COPY package-lock.json ./
COPY package.json ./

###  Installing dependencies

RUN npm install
RUN npm install bcrypt
RUN npm install jsonwebtoken

# copy local files to app folder
COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]