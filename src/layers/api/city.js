const CITIES_API = 'http://api.apixu.com/v1/search.json';
const WEATHER_API = 'http://api.apixu.com/v1/current.json';
const USER_KEY = '2e09b726f8fa4116b2965906172411';

export const fetchCityListApi = (cityNameQuery) => {
  return new Promise((resolve, reject) => {
    fetch(`${CITIES_API}?key=${USER_KEY}&q=${cityNameQuery}`)
    .then((response) => resolve(response.json()))
    .catch((response) => reject(response.json()))
  })
}

export const fetchWeatherByCityNameApi = (cityName) => {
  return new Promise((resolve, reject) => {
    fetch(`${WEATHER_API}?key=${USER_KEY}&q=${cityName}`)
    .then((response) => resolve(response.json()))
    .catch((response) => reject(response.json()))
  })
}