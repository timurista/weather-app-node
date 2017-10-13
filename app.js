const request = require('request');

request({
  url: "http://maps.googleapis.com/maps/api/geocode/json?address=1301%20Lambard%20Street%20Philadelphia",
  json: true
}, (error, response, body) => {
  console.log(body);
});