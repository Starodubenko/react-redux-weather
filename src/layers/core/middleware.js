import { fetchCities } from "../api";
import { startCityFetch, endCityFetch, getCityList } from "../core";
import { pullAllBy, concat } from "lodash-es";

export const cityMiddleware = ({ dispatch, getState }) => next => (action) => {
    const result = next(action);
  
    if (action.type === startCityFetch.toString()) {
        fetchCities(action.payload.cityName)
            .then(result => {
                const currentCityList = getCityList(getState())
                const preparedResult = concat(pullAllBy(currentCityList, result, 'id'), result)
                dispatch(endCityFetch(preparedResult))
            });
    }
  
    return result;
  };