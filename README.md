### node-async-weather
**A simple Node Weather Application**

-----

Node js application that accepts a location input or uses the users IP address to determine the users location. Once location is established, the current weather is provided for said location. This application utilizes:

* [request](https://github.com/request/request) - simple HTTP client
* [yargs](http://yargs.js.org/) - for easy variables in the command line
* [dotenv](https://www.npmjs.com/package/dotenv) - Environment variables storage in file
* [OpenWeatherMap](http://openweathermap.org/) - free weather api
* [IPinfo.io](http://ipinfo.io/) - free ip location lookup api
* [CLI-Table2](https://github.com/jamestalmage/cli-table2) -  pretty unicode tables for the command line

-------------

###HACKTOBERFEST!
This project was featured during DigitalOcean's 2016 HACKTOBERFEST! Thanks to everyone who contributed in both discussion and coding! 

-------------

How to run the app locally:

1.  Run ```npm install``` to install all needed dependencies.
2.  Navigate to [OpenWeatherMap's ](http://openweathermap.org/) and get a free API key.
3.  Set your API Key. There are two methods:

	- Set an environment variable: ```API_KEY```

    	Example: ```API_KEY=yourKeyHere```

    	Windows Example: ```SET API_KEY=yourKeyHere```

    - Create a `.env` file in the root of the project with the content of ```API_KEY=yourKeyHere```

4.  Request the weather for your current location (as determined by IP) by running: ```npm start```

    - Specify any location by using the location flag: ```npm start -- -l Boston```

5.  Request the weather forecast for your current location (as determined by IP) by running: ```npm start -- -f```

    - Specify any location as you would with the location flag: ```npm start -- -f Denver```
    - Note that you can specify only one location for both parameters or specify the location for both parameters
