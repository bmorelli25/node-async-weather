var request = require('request');

module.exports = function (location) {
  return new Promise (function (resolve, reject) {
    var apiKey = process.env.API_KEY;
    console.log(location);
    var url = `http://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)},us&mode=json&units=imperial&APPID=${apiKey}`;

    if (!location) {
      reject('No Location Provided');
    };

    request({
      url,
      json: true
    }, function (error, response, body) {
      if (error) {
        reject('Unable to fetch Weather: ', error.message);
      } else { // Print entire JSON 'nicely': console.log(JSON.stringify(body, null, 4));
        var location = body.city.name;
        var temp = body.list[0].main.temp;
        var message = `The 5 day forecasted temperature in ${location} is ${temp} degrees!`;
        resolve(message);
      };
    });
  });
};
