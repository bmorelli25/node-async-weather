var request = require('request');
var apiKey = '';
var url = `http://api.openweathermap.org/data/2.5/weather?q=Portland&units=imperial&APPID=${apiKey}`;

request({
  url: url,
  json: true
}, function (error, response, body) {
  if (error) {
    console.log('Unable to fetch Weather: ', error.message);
  } else {
    // Print entire JSON 'nicely'
    // console.log(JSON.stringify(body, null, 4));

    var location = body.name
    var temp = body.main.temp;
    var message = `It's ${temp} degrees in ${location}!`;
    console.log(message);
  };
});
