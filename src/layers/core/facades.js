import { getSelectedCityIds, getCityList, getDegree } from "../state";
import { forEach, filter, includes } from "lodash-es";

const getCitiesBySelectedIds = (state) => {
    const selectedCityIds = getSelectedCityIds(state);
    const cityList = getCityList(state);

    return filter(cityList, item => includes(selectedCityIds, item.id));
}

export const getSelectedCities = (state) => {
    const filterDegree = getDegree(state);

    return filter(getCitiesBySelectedIds(state), item => {
        return item.degree === filterDegree;
    })
}

export const getWeatherDegreeRange = (state) => {
    const selectedCityList = getCitiesBySelectedIds(state);

    let min = 100;
    let max = 0;

    forEach(selectedCityList, city => {
        if (city.degree < min) {
            min = city.degree;
        }

        if (city.degree > max) {
            max = city.degree;
        }
      });

    return { min, max }
}