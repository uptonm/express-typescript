# Express-Typescript

[![Greenkeeper badge](https://badges.greenkeeper.io/uptonm/express-typescript.svg)](https://greenkeeper.io/)

Attempt to add some structure to a basic express API through the introduction of stronger typecasting. Built-in typescript, transpiled down to es5, ran through pm2 for container support.

## Getting started

To get up and running start by clone this project and open with your editor of choice. In the root of the project create a `.env` file for storing environment variables and populate it with the following.

```bash
PORT=8000
DB_URI=mongodb://localhost:27017/express-ts
GOOGLECLIENT=YOUR-GOOGLE-API-ID
GOOGLESECRET=YOUR-GOOGLE-API-SECRET
SPOTIFYCLIENT=YOUR-SPOTIFY-API-ID
SPOTIFYSECRET=YOUR-SPOTIFY-API-SECRET
```

Now you will need to install [Docker](https://docs.docker.com/install/) to host your local instance of MongoDB. Once installed, open up a terminal and install MongoDB with the following command.

```bash
docker pull mongo
```

Once MongoDB is installed you can then start it by running

```bash
docker run -p 27017:27017 mongo
```

This will create a container running your MongoDB database on `localhost:27017`.

Going back to your editor, open a terminal at the project root directory and run `npm install` followed by `npm run dev`. This will start the app on `localhost:8000` and you'll be ready to go! 🚀
