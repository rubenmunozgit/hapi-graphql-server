const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  weatherApi: process.env.WEATHER_KEY
};