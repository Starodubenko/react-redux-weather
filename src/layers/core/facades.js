import { getWeatherList, getDegree } from "../state";

export const getWeather = (state) => {
    const weatherList = getWeatherList(state);
    const filterDegree = getDegree(state);
    
    return weatherList.filter(item => {
        return item.degree === filterDegree;
    })
}