import { getDegree, getWeatherList } from "../state";
import { forEach, filter } from "lodash-es";

export const getWeather = (state) => {
    const filterDegree = getDegree(state);

    const result = filter(getWeatherList(state), item => {
        return item.temperature === filterDegree;
    })
    debugger;

    return result;
}

export const getWeatherTemperatureRange = (state) => {
    const weatherList = getWeatherList(state);

    let min = 100;
    let max = 0;

    // if (weatherList.length === 1){
    //     return {
    //         min: weatherList[0].temperature,
    //         max: weatherList[0].temperature
    //     }
    // }

    forEach(weatherList, weather => {
        if (weather.temperature < min) {
            min = weather.temperature;
        }

        if (weather.degree > max) {
            max = weather.temperature;
        }
      });

    return { min, max }
}