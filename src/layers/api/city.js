const CITIES_API = 'http://api.apixu.com/v1/search.json';
const WEATHER_API = 'http://api.apixu.com/v1/current.json';
const USER_KEY = '2e09b726f8fa4116b2965906172411';

const suggestions = [{
  id: '1',
  name: 'Moscow',
  degree: 5,
  wind: 5,
  pressure: 752,
},{
  id: '2',
  name: 'SPB',
  degree: 5,
  wind: 8,
  pressure: 730,
},{
  id: '3',
  name: 'SPB1',
  degree: 5,
  wind: 8,
  pressure: 730,
},{
  id: '4',
  name: 'SPB2',
  degree: 5,
  wind: 8,
  pressure: 730,
},{
  id: '5',
  name: 'Alma-ata',
  degree: 5,
  wind: 5,
  pressure: 752,
}];

export const fetchCities = (value) => {
    return new Promise((resolve, reject) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;
      
        const result = inputLength === 0
          ? []
          : suggestions.filter(suggestion => {
              const keep =
                count < 5 && suggestion.name.toLowerCase().slice(0, inputLength) === inputValue;
      
              if (keep) {
                count += 1;
              }
      
              return keep;
            });

        setTimeout(() => resolve(result), 0);
    })
}

export const fetchCityList = (cityNameQuery) => {
  return new Promise((resolve, reject) => {
    fetch(`${CITIES_API}?key=${USER_KEY}&q=${cityNameQuery}`)
    .then((response) => resolve(response.json()))
    .catch((response) => reject(response.json()))
  })
}

export const fetchWeatherByCityName = (cityName) => {
  return new Promise((resolve, reject) => {
    fetch(`${WEATHER_API}?key=${USER_KEY}&q=${cityName}`)
    .then((response) => resolve(response.json()))
    .catch((response) => reject(response.json()))
  })
}