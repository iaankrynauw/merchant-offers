# Angular 2 Merchant Offers

#Global NPM Dependencies

1. Run `sudo npm install -g tsc`

## Running the Application

1. Run `npm install` to install app dependencies

2. Run `npm start` in a separate terminal window to start the server and launch the app

## Deploy with Capistrano

The deploy script does not run npm install but an initial npm install is required on the server.

## Note:

For package size and load time reasons this application does not use any node modules but includes all relevant angular2/javascript modules through a CDN network. See `index.html`.
