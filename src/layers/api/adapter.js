import { map } from "lodash-es";
import { fetchWeatherByCityNameApi, fetchCityListApi } from "./city";

export const fetchCityList = (cityNameQuery) => {
    return new Promise((resolve, reject) => {
        fetchCityListApi(cityNameQuery)
        .then(result => {
            resolve(
                map(result, city => ({
                    id: city.id,
                    label: city.name,
                }))
            )
        })
        .catch(error => reject(error))
    })
  }
  
  export const fetchWeatherByCityName = (cityName) => {
    return new Promise((resolve, reject) => {
        fetchWeatherByCityNameApi(cityName)
        .then(result => {
            debugger;
            resolve(
                [{
                    conditionIcon: result.current.condition.icon,
                    conditionText: result.current.condition.text,
                    temperature: result.current.temp_c,
                    wind: result.current.wind_kph,
                    pressure: result.current.pressure_mb,
                }]
            )
        })
        .catch(error => reject(error))
    })
  }