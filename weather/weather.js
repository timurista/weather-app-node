
const request = require('request');
const { weather_key } = require('../SECRET_KEYS');

const getWeather = ({ latitude, longitude }, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${weather_key}/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {    
    if (!error && response.statusCode === 200) {
      const { temperature, apparentTemperature } = body.currently;
      callback(undefined, { 
        temperature,
        apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  })
}

module.exports = {
  getWeather
}