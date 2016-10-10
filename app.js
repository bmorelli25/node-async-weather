'use strict';
require('dotenv').config({silent:true});
let weather = require('./weather.js');
let location = require('./location.js');
let forecast = require('./forecast.js');
let unit = 'imperial';

let argv = require('yargs')
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
      },
      unit: {
        demand: false,
        alias: 'u',
        description: 'Unit of temperature',
        type: 'string'
      }
    }).help('help');
  })
  .help('help')
  .argv;

const defaultWeather = function() {
  if (!location) {
    console.log('Unable to guess location');
    return;
  };

  location().then(function (userLocation) {
    return weather(userLocation.city, unit);
  }).then(function (currentWeather) {
    console.log(currentWeather);
  }).catch(function (error) {
    console.log(error);
  });
}
const defaultForecast = function() {
  if (!location) {
    console.log('Unable to guess location');
    return;
  };

  location().then(function (userLocation) {
    return forecast(userLocation.city, unit);
  }).then(function (forecastWeather) {
    console.log(forecastWeather);
  }).catch(function (error) {
    console.log(error);
  });
}

if(typeof argv.u === 'string' && argv.u === 'C') {
  unit = 'metric';
}

if ((typeof argv.l !== 'undefined') || (typeof argv.f !== 'undefined')) {
   if (typeof argv.l === 'string' && argv.l.length >= 0) { //user has input a location to the -l parameter
     weather(argv.l, unit).then(function (currentWeather) {
       console.log(currentWeather);
     }, function (error) {
       console.log(error);
     });
   } else if (typeof argv.f === 'string' && argv.f.length >= 0 && typeof argv.l === 'boolean') { //user has not input a location to the -l parameter but did to the -f parameter
     weather(argv.f, unit).then(function (currentWeather) {
       console.log(currentWeather);
     }, function (error) {
       console.log(error);
     });
   } else if (typeof argv.l === 'boolean') { //user has not input a location to the -l parameter but wants the weather for his location
     defaultWeather();
   }

   if (typeof argv.f === 'string' && argv.f.length >= 0) { //user has input a location to the -f parameter
     forecast(argv.f, unit).then(function (forecastWeather) {
       console.log(forecastWeather);
     }, function (error) {
       console.log(error);
     });
   } else if (typeof argv.l === 'string' && argv.l.length >= 0 && typeof argv.f === 'boolean') { //user has not input a location to the -f parameter but did to the -l parameter
     forecast(argv.l, unit).then(function (forecastWeather) {
       console.log(forecastWeather);
     }, function (error) {
       console.log(error);
     });
   } else if (typeof argv.f === 'boolean') { //user has not input a location to the -f parameter but wants the forecast for his location
     defaultForecast();
   }
} else { //no parameter
  defaultWeather();
}
