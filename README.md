# SoftwareDev

Plant Care is a garden planning web application that allows users to plan out the space/garden of their dreams quickly. People want a high-yield crop garden or a beautiful indoor space with plants but lack the knowledge and expertise to plan and create it. With PlantCare, users are able to search for different plants based on a number of filters, plan out which plants will go into their indoor space and garden and be aware of plant information such as any watering requirements.

## How to Run Through Docker

1. Install docker by going to the [Docker download page](https://docs.docker.com/get-started/) and picking the installer that matches your operating system.
2. Once docker is set up, run the following commands in this directory
> `docker-compose build`

> `docker-compose up -d`
3. Once the container is successfully running, open up your web browser and put [http://localhost:3000](http://localhost:3000) as the URL.
4. To stop the application, run the following command
> `docker-compose stop`