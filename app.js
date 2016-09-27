var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
  .option('location', {
    alias: 'l',
    demand: false,
    describe: 'Location to fetch weather',
    type: 'string'
  })
  .help('help')
  .argv;

// if (typeof argv.l === 'string' && argv.l.length > 0) {
//   weather(argv.l, function (currentWeather) {
//     console.log(currentWeather);
//   });
// } else {
//   location(function (location) {
//     if (!location) {
//       console.log('Unable to guess location');
//       return;
//     };
//
//     weather(location.city, function (currentWeather) {
//       console.log(currentWeather);
//     });
//   });
// };

if (typeof argv.l === 'string' && argv.l.length > 0) {
  weather(argv.l).then(function (currentWeather) {
    console.log(currentWeather);
  }, function (error) {
    console.log(error);
  });

} else {
  if (!location) {
    console.log('Unable to guess location');
    return;
  };

  location().then(function (userLocation) {
    return weather(userLocation.city);
  }).then(function (currentWeather) {
    console.log(currentWeather);
  }).catch(function (error) {
    console.log(error);
  });
};
