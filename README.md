Weather

React-Redux Application

API: was taken from https://www.apixu.com/doc/examples.aspx service.

API Exapmles:

So to get current weather for London: JSON: http://api.apixu.com/v1/current.json?key=<YOUR_API_KEY>&q=London

XML: http://api.apixu.com/v1/current.xml?key=<YOUR_API_KEY>&q=London
To get 7 day weather for US Zipcode 07112: JSON: http://api.apixu.com/v1/forecast.json?key=<YOUR_API_KEY>&q=07112&days=7

XML: http://api.apixu.com/v1/forecast.xml?key=<YOUR_API_KEY>&q=07112&days=7
Search for cities starting with Lond: JSON: http://api.apixu.com/v1/search.json?key=<YOUR_API_KEY>&q=lond
XML: http://api.apixu.com/v1/search.xml?key=<YOUR_API_KEY>&q=lond

Configure API variables:
    1) Create .env.local file in root projec directory.
    2) Define variables which will be included in process.env object.

Example:
    REACT_APP_CITIES_API=http://api.apixu.com/v1/search.json
    REACT_APP_WEATHER_API=http://api.apixu.com/v1/current.json

    REACT_APP_USER_KEY=<YOUR_API_KEY>

Should have:
    - Core logic tests;
    - JSX snapshot tests tests;
    - Reducers tests;
    - Adapter tests;
    - ensyme tests;
    - auto tests.