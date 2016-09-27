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

if (typeof argv.l === 'string' && argv.l.length > 0) {
  weather(argv.l, function (currentWeather) {
    console.log(currentWeather);
  });
} else {
  location(function (location) {
    if (!location) {
      console.log('Unable to guess location');
      return;
    };

    weather(location.city, function (currentWeather) {
      console.log(currentWeather);
    });
  });
};
