const yargs = require('yargs');
const axios = require('axios');
const { weather_key } = require('./SECRET_KEYS');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl)
  .then(response => {
    if (response.data.status === 'ZERO_RESULTS') throw new Error('Unable to find that address.');
    const { lat, lng } = response.data.results[0].geometry.location;
    console.log(response.data.results[0].formatted_address);  
    const weatherUrl = `https://api.darksky.net/forecast/${weather_key}/${lat},${lng}`;    
    return axios.get(weatherUrl);
  })
  .then(response => {
    const { temperature, apparentTemperature, summary } = response.data.currently;
    // console.log(JSON.stringify(response.data.currently, undefined, 2))
    console.log(`Weather is: ${summary}. It is ${temperature} and feels like ${apparentTemperature}`);
  })
  .catch(e => {
    if (e.code=== 'ENOTFOUND') console.log('Unable to connect to server');
    console.log(e.message);
  });
// include more information

// default location
