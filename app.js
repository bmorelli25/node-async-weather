require('dotenv').config({silent:true});
var weather = require('./weather.js');
var location = require('./location.js');
var forecast = require('./forecast.js');

var argv = require('yargs')
  .command(function (yargs) {
    yargs.options({
      location: {
        demand: false,
        alias: 'l',
        description: 'Location to fetch weather',
        type: 'string'
      },
      forecast: {
        demand: false,
        alias: 'f',
        description: 'Forecast of searched city',
        type: 'string'
      }      
    }).help('help'); 
  })
  .help('help')
  .argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
  weather(argv.l).then(function (currentWeather) {
    console.log(currentWeather);
  }, function (error) {
    console.log(error);
  });

}else if(typeof argv.f === 'string' && argv.f.length > 0) {
  forecast(argv.f).then(function (currentForecast) {
    console.log(currentForecast);
  }, function (error) {
    console.log(error);
  });    
}
 else {
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
