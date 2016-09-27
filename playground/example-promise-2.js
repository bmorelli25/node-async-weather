function getLocation() {
  return new Promise(function(resolve, reject) {
    resolve('Seattle');
  });
};

function getWeather (location) {
  return new Promise(function(resolve, reject) {
    resolve('It is 76 degrees in ' + location);
  });
};

getLocation().then(function (location) {
  return getWeather(location);
}).then(function(message) {
  console.log(message);
});
