# SoftwareDev

Plant Care is a garden planning web application that allows users to plan out the space/garden of their dreams quickly. People want a high-yield crop garden or a beautiful indoor space with plants but lack the knowledge and expertise to plan and create it. With PlantCare, users are able to search for different plants based on a number of filters, plan out which plants will go into their indoor space and garden and be aware of plant information such as any watering requirements.

## How to Run Locally

1. Install Node.js and npm by going to the [Node.js download page](https://nodejs.org/en/download/) and picking the installer that matches your operating system.
2. Clone this repository to your local machine. To do this, open up the Git terminal and go to the directory you would like the project to reside in. Once you are there, run the following command:
> `git clone https://github.com/rajpootmegha7/SoftwareDev.git`
3. Open up the node terminal, and from that terminal go to the new softwaredev directory that was just created.
4. Run the following command inside the softwardev directory, softwaredev/server directory, and softwaredev/client/plantcare directory, this will install all dependecies:
>`npm install`
5. Install the latest version of PostgreSQL and run the script plant_care_DB_setup.sql from inside ./server/models to set up the database.
6. Everytime you would like to start the application, run the following command in both softwaredev/client/plantcare and softwaredev/server:
>`npm start`
7. Once both the client and server are running, open up your web browser and put localhost:3000 as the URL.

## How to Run Through Docker

1. Clone the SoftwareDev repository to your local machine. 
`https://github.com/rajpootmegha7/SoftwareDev.git
2. To do this, open up your preferred terminal and go to the directory you would like the project to reside in. Once you are there, run the following command:
> `git clone https://github.com/rajpootmegha7/SoftwareDev.git
3. Install docker by going to the [Docker download page](https://docs.docker.com/get-started/) and picking the installer that matches your operating system.
4. Once docker is set up, run the following command in the <Where the SoftwareDev repo is cloned on your local machine>/SoftwareDev
> cd <Where the SoftwareDev repo is cloned on your local machine>/SoftwareDev
> `docker-compose up --build`
5. Once the container is successfully running, open up your web browser and put [http://localhost:3000](http://localhost:3000) as the URL.
6. To suspend the containers, use your machine's shortcut key for sending the interrupt (terminate) signal SIGINT
> Windows: `CTRL + C`, MacOS: `CMD + C`
7. Once the docker containers are set up, you may now run the following command to run this application if you have suspended your containers using
> `docker-compose up`
8. Then to kill these containers run the following command:
>  `docker-compose down --volumes`
  

