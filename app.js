const request = require('request');
const _ = require('lodash');

request({
  url: "http://maps.googleapis.com/maps/api/geocode/json?address=1301%20Lambard%20Street%20Philadelphia",
  json: true
}, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  // pretty print
  // use json stringify, then add undefined to not replace, and value of 2 to format
  console.log(JSON.stringify(body, undefined, 2));

  const address = _.get(body, 'results[0].formatted_address');
  const { lat, lng } = _.get(body, 'results[0].geometry.location');
  
  console.log(`Address: ${address}`);
  console.log(`LAT: ${lat}, LNG: ${lng}`);
});