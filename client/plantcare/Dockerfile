#FROM is the base image for which we will run our application
# Dockerfile for React client

# Build react client
FROM node:latest

# Working directory be app
WORKDIR /usr/SoftwareDev/client/plantcare

COPY package-lock.json /usr/SoftwareDev/client/plantcare
COPY package.json /usr/SoftwareDev/client/plantcare

###  Installing dependencies

RUN npm install -g npm@latest
RUN npm install

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]