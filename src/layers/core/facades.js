import { getDegree, getWeatherList } from "../state";
import { forEach, filter } from "lodash-es";

export const getWeather = (state) => {
    const filterDegree = getDegree(state);

    const result = filter(getWeatherList(state), item => {
        return item.temperature == filterDegree;
    })

    return result;
}


export const getCurrentDegree = (state) => {
    const temperatureRage = getWeatherTemperatureRange(state);
    if (temperatureRage.min == temperatureRage.max) {
        return temperatureRage.min + '';
    }
    
    return getDegree(state);
}


export const getWeatherTemperatureRange = (state) => {
    const weatherList = getWeatherList(state);

    let min = 1000;
    let max = -1000;

    if (weatherList.length === 0){
        return {
            min: 0,
            max: 0,
        }
    }

    forEach(weatherList, weather => {
        if (weather.temperature < min) {
            min = weather.temperature;
        }

        if (weather.temperature > max) {
            max = weather.temperature;
        }
      });

    return { min, max }
}