var weather = require('./weather.js');
var location = require('./location.js');
var forecast = require('./forecast.js');

var argv = require('yargs')
  .option('location', {
    alias: 'l',
    demand: false,
    describe: 'Location to fetch weather',
    type: 'string'
  })
  .option('forecast', {
    alias: 'f',
    demand: false,
    describe: '5-day forecast',
    type: 'string'
  })
  .help('help')
  .argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
  weather(argv.l).then(function (currentWeather) {
    console.log(currentWeather);
  }, function (error) {
    console.log(error);
  });

} else if (typeof argv.l === 'undefined' && typeof argv.f === 'undefined') {
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
}

if (typeof argv.f === 'string' && argv.f.length >= 0) {
  if(argv.f.length === 0) {
    if(typeof argv.l === 'string' && argv.l.length > 0) {
      forecast(argv.l).then(function (forecastWeather) {
        console.log(forecastWeather);
      }, function (error) {
        console.log(error);
      });
    } else {
      if (!location) {
        console.log('Unable to guess location');
        return;
      } else {
        location().then(function (userLocation) {
          return forecast(userLocation.city);
        }).then(function (forecastWeather) {
          console.log(forecastWeather);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  } else {
    forecast(argv.f).then(function (forecastWeather) {
      console.log(forecastWeather);
    }, function (error) {
      console.log(error);
    });
  }
}
