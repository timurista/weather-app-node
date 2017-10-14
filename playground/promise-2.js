const request = require('request');
const _  = require('lodash');

var geocodeAddress = address => {
  return new Promise((resolve, reject) => {
    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address.');
      } else if (body.status === 'OK') {
        const address = _.get(body, 'results[0].formatted_address');
        const { lat, lng } = _.get(body, 'results[0].geometry.location', {});      
        resolve({
          address,
          latitude: lat,
          longitude: lng
        });
      }
    });
  })
};

geocodeAddress('19146')
  .then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
  }).catch(err => console.log(err));