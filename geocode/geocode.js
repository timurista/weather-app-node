const request = require('request');
const _ = require('lodash');

const geocodeAddress = (address) => {
  console.log(`fetching ${address}...`);
  
  // make request
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      console.log('Unable to connect to google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      console.log('Unable to find that address.');
    } else if (body.status === 'OK') {
      // pretty print
      // use json stringify, then add undefined to not replace, and value of 2 to format
      // console.log(JSON.stringify(body, undefined, 2));
  
      const address = _.get(body, 'results[0].formatted_address');
      const { lat, lng } = _.get(body, 'results[0].geometry.location', {});
      
      console.log(`Address: ${address}`);
      console.log(`LAT: ${lat}, LNG: ${lng}`);
    }
  });
}

module.exports = {
  geocodeAddress
}