var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500)
  })
}

asyncAdd(5, 7).then((res) => {
  console.log(res);
  return asyncAdd(res, '33');
}).then((res) => {
  console.log('Should be 45', res)
}).catch((err) => { 
  console.log(err)
});

// Promise Chainging
// return new promise


// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // only can resolve or reject once
//     resolve('it worked!');
//     // reject("it didn't work");    
//   }, 1000);
// });

// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage)
// })