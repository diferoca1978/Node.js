# Rest Project + TypeScript

This project previously initialized have all necessary to work with TypeScript, Express y Rest.

Each step of his configuration had realized previously, therefore only is necessary to clone the project and start to work.

## Instalation

1. To clone .env.template to .env and configure the environment variables.
2. Run `npm install` to install all dependencies.
3. In the case that to need to use a DB, configure the docker-compose.yml file and Run `docker-compose up -d` to raise the services that wish.
4. Run `npm run seedDB` to populate the DB with ramdom data to make test. !!!WARNING: do not run this command in production othewise it would delete your entire DB.
5. Run `npm run dev` to raise the project in develop mode.

## Deploy test

1. Through using ngrok (https://ngrok.com/)
2. Through using vscode ports
