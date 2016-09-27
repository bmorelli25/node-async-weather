### node-async-weather
Node Weather Application

-----

Node js application that accepts a location input or uses the users IP address to determine the users location. Once location is established, the current weather is provided for said location. This application utilizes: 

* [request](https://github.com/request/request) - simple HTTP client
* [yargs](http://yargs.js.org/) - for easy variables in the command line
* [OpenWeatherMap](http://openweathermap.org/) - free weather api
* [IPinfo.io](http://ipinfo.io/) - free ip location lookup api

-----

How to use:

1.  ```npm install```

2.  Navigate to [OpenWeatherMap](http://openweathermap.org/) and request your free API Key. 

3.  Set your API Key to your machine using enviornment variables: ```API_KEY```

    Example: ```API_KEY=yourKeyHere```
    Windows Example: ```SET API_KEY=yourKeyHere```

2.  Request the weather for your current location (as determined by IP) by running: ```npm start```

3.  Specify any location by using the location flag: ```npm start -- -l Boston```
