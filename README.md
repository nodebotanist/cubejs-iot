# Using Cube.JS on IoT data

This project runs on a raspberry Pi with a temperature/humidity sensor and a DigitalOcean droplet running MongoDB and the MongoDB BI tool.

To start, `pi_code` contains the code to run temperature and humidity gathering on the Pi and reports that data to the MongoDB droplet, storing temperature and time data. We'll also run our cubejs instance off of the Pi. The code for this is contained in `cube-instance`

## Setup

To start, create a MongoDB droplet ([this tutorial helps](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-18-04)) and use ssh port forwarding on your pi to map your localhost port 27017 and whichever port you plan to use for the BI tool (I used 27018) to your droplet.

Then, install the MongoDB BI tool on the droplet [using the tutorial in the documentation](https://docs.mongodb.com/bi-connector/master/tutorial/install-bi-connector-debian/). Configure and run it as a daemon.

Install Node.js and npm on your Pi, then run `npm i` in the `pi_code` directory. Use `sudo raspi-config` to enable I2C interface.

Run the pi sensor code with `sudo node index.js`

Go into the `cubejs-instance` folder and run `npm i` again, then start the cubeJS instance with `npm run dev`.

## Usage

Go to the CubeJS instance at `localhost:4000` and look through the Schema and set up some charts! You can pivot on Time and Temps.
