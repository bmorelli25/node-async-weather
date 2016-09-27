// function doWork (shouldFail) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       if (shouldFail) {
//         reject('shouldFail true');
//       } else {
//         resolve('success');
//       };
//     }, 1000);
//   });
// };
//
// doWork().then(function (message) {
//   console.log(message);
//   return doWork(true);
// }).then(function (message) {
//   console.log(message);
// }).catch(function (error) {
//   //catches any errors above
//   console.log(error);
// });

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
