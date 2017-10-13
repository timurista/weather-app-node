var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'My Name'
  };
  console.log('waiting...');
  setTimeout( () => callback(user), 1000);
};

getUser(31, (user) => {
  console.log(user);
});