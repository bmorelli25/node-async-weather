let request = require('request');

module.exports = function (location) {
  return new Promise (function (resolve, reject) {
    let API_KEY = process.env.API_KEY;

    if(typeof(API_KEY) == "undefined" || API_KEY.length == 0) {
      return reject("No API key set. (Create a .env file or set an API_KEY environment variable)");
    }

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&units=imperial&APPID=${API_KEY}`;

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
        let message = ``;
        if(body.cod == 200) {
          let location = body.name;
          let temp = body.main.temp;
          message = `It's ${temp} degrees in ${location}!`;
        } else {
          message = `${body.cod} - ${body.message}`;
        }
        resolve(message);
      };
    });
  });
};
