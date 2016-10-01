var request = require('request');

module.exports = function (location) {
  return new Promise (function (resolve, reject) {
    var apiKey = process.env.API_KEY;
    if(typeof(apiKey) == "undefined" || apiKey.length == 0) {
      return reject("No API key set. (Create a .env file or set an API_KEY environment variable)");
    }

    var url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&units=imperial&APPID=${apiKey}`;

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
        var location = body.name;
        var temp = body.main.temp;
        var message = `It's ${temp} degrees in ${location}!`;
        resolve(message);
      };
    });
  });
};
