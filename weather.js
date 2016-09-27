var request = require('request');

module.exports = function (location, callback) {
  var apiKey = '';
  var url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&units=imperial&APPID=${apiKey}`;

  if (!location) {
    return callback('No Location Provided');
  };

  request({
    url,
    json: true
  }, function (error, response, body) {
    if (error) {
      callback('Unable to fetch Weather: ', error.message);
    } else { // Print entire JSON 'nicely': console.log(JSON.stringify(body, null, 4));
      var location = body.name
      var temp = body.main.temp;
      var message = `It's ${temp} degrees in ${location}!`;
      callback(message);
    };
  });
};
