'use strict';
let request = require('request'),
    Table = require('cli-table2');

module.exports = function (location, unit) {

  return new Promise (function (resolve, reject) {
    let API_KEY = process.env.API_KEY,
        url = `http://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)}&units=${unit}&APPID=${API_KEY}`;

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
        let message = ``;
        if(body.cod == 200) {
          let location = body.city.name,
              table = new Table({ head: [location, '00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'] }),
              row = {},
              i = 0,
              length = body.list.length;
          for(const item of body.list){
            let leftHeader = `${item.dt_txt.substring(0,10)}`;
            let temp = []; //weird stuff to have the date in the first column
            temp.push(leftHeader);
            row[leftHeader] = row[leftHeader] || temp;
            if (i === 0) { //check which hour we get first on the first day of data
              //weird stuff to have blank cases
              switch (item.dt_txt.substring(11)) {
                case '00:00:00':
                  break;
                case '03:00:00':
                  for (let i = 0; i < 1; i++) {
                    row[leftHeader].push('');
                  }
                  i = 1;
                  length += i;
                  break;
                case '06:00:00':
                  for (let i = 0; i < 2; i++) {
                    row[leftHeader].push('');
                  }
                  i = 2;
                  length += i;
                  break;
                case '09:00:00':
                  for (let i = 0; i < 3; i++) {
                    row[leftHeader].push('');
                  }
                  i = 3;
                  length += i;
                  break;
                case '12:00:00':
                  for (let i = 0; i < 4; i++) {
                    row[leftHeader].push('');
                  }
                  i = 4;
                  length += i;
                  break;
                case '15:00:00':
                  for (let i = 0; i < 5; i++) {
                    row[leftHeader].push('');
                  }
                  i = 5;
                  length += i;
                  break;
                case '18:00:00':
                  for (let i = 0; i < 6; i++) {
                    row[leftHeader].push('');
                  }
                  i = 6;
                  length += i;
                  break;
                case '21:00:00':
                  for (let i = 0; i < 7; i++) {
                    row[leftHeader].push('');
                  }
                  i = 7;
                  length += i;
                  break;
                default:
                  break;
              }
            }
            row[leftHeader].push(`${item.main.temp}`);
            i++;
            if(i%8 === 0 || i == length){
              table.push(row[leftHeader]);
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
