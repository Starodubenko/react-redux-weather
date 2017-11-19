import { getWeatherMap, getDegree } from "../state";
import { forEach, filter } from "lodash-es";

export const getWeather = (state) => {
    const weatherList = getWeatherMap(state);
    const filterDegree = getDegree(state);

    debugger;
    
    return filter(weatherList, item => {
        return item.degree === filterDegree;
    })
}

export const getWeatherDegreeRange = (state) => {
    const weatherList = getWeatherMap(state);

    let min = 100;
    let max = 0;

    forEach(weatherList, weather => {
        if (weather.degree < min) {
            min = weather.degree;
        }

        if (weather.degree > max) {
            max = weather.degree;
        }
      });

    return { min, max }
}