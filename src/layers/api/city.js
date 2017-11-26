
export const fetchCityListApi = (cityNameQuery) => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_CITIES_API}?key=${process.env.REACT_APP_USER_KEY}&q=${cityNameQuery}`)
    .then((response) => resolve(response.json()))
    .catch((response) => reject(response.json()))
  })
}

export const fetchWeatherByCityNameApi = (cityName) => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_WEATHER_API}?key=${process.env.REACT_APP_USER_KEY}&q=${cityName}`)
    .then((response) => resolve(response.json()))
    .catch((response) => reject(response.json()))
  })
}