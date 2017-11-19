import { getWeatherList, getDegree } from "../state";
import { forEach } from "lodash-es";

export const getWeather = (state) => {
    const weatherList = getWeatherList(state);
    const filterDegree = getDegree(state);
    
    return weatherList.filter(item => {
        return item.degree === filterDegree;
    })
}

export const getWeatherDegreeRange = (state) => {
    const weatherList = getWeatherList(state);

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