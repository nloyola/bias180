# Bias 180 Website

This is the source code for the Bias 180 Website.

It uses [Payload CMS](https://payloadcms.com/) to store the website's information.


## Build Quick Start

To spin up the website locally, follow these steps:

1. First clone the repo
1. Then `cd YOUR_PROJECT_REPO && cp .env.example .env`
1. Next `yarn && yarn dev`
1. Now `open http://localhost:3000/admin` to access the admin panel

## How it works

Payload, is configured to run on an Express server.

### Express

In every Payload app is a `server.ts` file in which you instantiate your own Express server and attach Payload
to it. This is where you can can add any custom Express middleware or routes you need to serve your front-end.

## Production

To run Payload in production, you need to build and serve the Admin panel. To do so, follow these steps:

1. `yarn build` in your project root.

    This creates a `./build` directory with a production-ready admin bundle.

1. Then, run `yarn serve` to run Node in production and serve Payload from the `./build` directory.

### PM2

PM2 is the process manager used to run the website.

See this
[link](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04)
for more information about PM2.
