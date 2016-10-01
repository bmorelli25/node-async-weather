var request = require('request');

module.exports = function (location) {
  return new Promise (function (resolve, reject) {
    var apiKey = process.env.API_KEY;
    console.log(location);
    var url = `http://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)}&mode=json&units=imperial&APPID=${apiKey}`;

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
        var temp1 = body.list[5].main.temp;
        var date1 = body.list[5].dt_txt;
        var temp2 = body.list[13].main.temp;
        var date2 = body.list[13].dt_txt;
        var temp3 = body.list[21].main.temp;
        var date3 = body.list[21].dt_txt;
        var temp4 = body.list[29].main.temp;
        var date4 = body.list[29].dt_txt;
        var temp5 = body.list[37].main.temp;
        var date5 = body.list[37].dt_txt;
        var message = `Here is the 5 day forecasted temperature in ${location}:
         ${date1}: ${temp1} degrees
         ${date2}: ${temp2} degrees
         ${date3}: ${temp3} degrees
         ${date4}: ${temp4} degrees
         ${date5}: ${temp5} degrees`;
        resolve(message);
      };
    });
  });
};
