# SoftwareDev

Plant Care is a garden planning web application that allows users to plan out the space/garden of their dreams quickly. People want a high-yield crop garden or a beautiful indoor space with plants but lack the knowledge and expertise to plan and create it. With PlantCare, users are able to search for different plants based on a number of filters, plan out which plants will go into their indoor space and garden and be aware of plant information such as any watering requirements.

## How to Run Locally

1. Install Node.js and npm by going to the [Node.js download page](https://nodejs.org/en/download/) and picking the installer that matches your operating system.
2. Clone this repository to your local machine. To do this, open up the Git terminal and go to the directory you would like the project to reside in. Once you are there, run the following command:
> `git clone https://github.com/rajpootmegha7/SoftwareDev`
3. Open up the node terminal, and from that terminal go to the new softwaredev directory that was just created.
4. Run the following command once inside the softwardev directory, softwaredev/server directory, and softwaredev/client/plantcare directory, this will install all dependecies:
>`npm install`
5. Install the latest version of PostgreSQL and run the script plant_care_DB_setup.sql from inside ./server/models to set up the database.
6. Everytime you would like to start the application, run the following command in both softwaredev/client/plantcare and softwaredev/server:
>`npm start`
7. Once both the client and server are running, open up your web browser and put localhost:3000 as the URL.

## How to Run Through Docker

1. Install docker by going to the [Docker download page](https://docs.docker.com/get-started/) and picking the installer that matches your operating system.
2. Once docker is set up, run the following commands in this directory
> `docker-compose build`

> `docker-compose up -d`
3. Once the container is successfully running, open up your web browser and put [http://localhost:3000](http://localhost:3000) as the URL.
4. To stop the application, run the following command
> `docker-compose stop`
