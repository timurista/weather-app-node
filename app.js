const yargs = require('yargs');
const { geocodeAddress } = require('./geocode/geocode');
const { getWeather } = require('./weather/weather');

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

geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);    
  } else {
    console.log(JSON.stringify(results, undefined, 2));
    getWeather(results, (errorMessage, weather) => {
      errorMessage && console.log(errorMessage);
      weather && console.log(`It is currently ${weather.temperature} and feels like ${weather.apparentTemperature}`);      
    });
  }
});

