# Dockerfile for Node Express Backend

FROM node:latest

# Working directory for backend
WORKDIR /usr/SoftwareDev/server

COPY package-lock.json /usr/SoftwareDev/server
COPY package.json /usr/SoftwareDev/server

###  Installing dependencies

RUN npm install -g npm@latest

# copy local files to app folder
COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]