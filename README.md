### node-async-weather
Node Weather Application

-----

Node js application that accepts a location input or uses the users IP address to determine the users location. Once location is established, the current weather is provided for said location. This application utilizes:

* [request](https://github.com/request/request) - simple HTTP client
* [yargs](http://yargs.js.org/) - for easy variables in the command line
* [OpenWeatherMap](http://openweathermap.org/) - free weather api
* [IPinfo.io](http://ipinfo.io/) - free ip location lookup api
* [CLI-Table2](https://github.com/jamestalmage/cli-table2) -  pretty unicode tables for the command line

-----

###HACKTOBERFEST!

Want to contribute? Here's how:

1.  First ```fork``` and ```star``` the project.
2.  Run ```npm install``` to install all needed dependencies.
3.  Navigate to [OpenWeatherMap's ](http://openweathermap.org/) and get a free API key.
4.  Set your API Key to your machine using enviornment variables: ```API_KEY```

    Example: ```API_KEY=yourKeyHere```
    Windows Example: ```SET API_KEY=yourKeyHere```
5.  Request the weather for your current location (as determined by IP) by running: ```npm start```
6.  Specify any location by using the location flag: ```npm start -- -l Boston```
7.  Browse the open issues, join the discussion, and push your code. All accepted Pull Requests will have their names added as contributors to the project. Thanks for all your help!
