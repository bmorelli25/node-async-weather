let request = require('request'),
    Table = require('cli-table2');

module.exports = function (location) {
  return new Promise (function (resolve, reject) {
    let API_KEY = process.env.API_KEY,
        url = `http://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)}&units=imperial&APPID=${API_KEY}`;

    if(typeof(API_KEY) == "undefined" || API_KEY.length == 0) {
      return reject("No API key set. (Create a .env file or set an API_KEY environment variable)");
    }

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
      console.log(JSON.stringify(body, null, 4));
        let message = ``;
        if(body.cod == 200) {
          let location = body.city.name,
              table = new Table({ head: [location, "00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"] }),
              row = {},
              i = 0;
          for(const item of body.list){
            let leftHeader = `${item.dt_txt.substring(0,10)}`;
            row[leftHeader] = row[leftHeader] || [];
            row[leftHeader].push(`${item.main.temp}`);
            i++;
            if(i%8 === 0){
              table.push(row);
              row = {};
            }
          }
          resolve(table.toString());
        } else {
          message = `${body.cod} - ${body.message}`;
          reslove(message);
        }
        //resolve(message);
      };
    });
  });
};
