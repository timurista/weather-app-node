const request = require('request');
const _ = require('lodash');

const geocodeAddress = (address, callback) => {
  console.log(`fetching ${address}...`);
  
  // make request
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      const address = _.get(body, 'results[0].formatted_address');
      const { lat, lng } = _.get(body, 'results[0].geometry.location', {});
      
      callback(undefined, {
        address,
        latitude: lat,
        longitude: lng
      });
    }
  });
}

module.exports = {
  geocodeAddress
}