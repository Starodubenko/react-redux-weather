import { select, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { map, concat, pullAllBy } from 'lodash-es';
import { fetchCityList, fetchWeatherByCityName } from '../../api';
import {
  startCityFetch,
  endCityFetch,
  failCityFetch,
  setSuggestions,
  getSelectedValue,
  clearSelectedValue,
  addSelectedCity,
  startRemoveWeather,
  removeWeather,
  endWeatherFetch,
  failWeatherFetch,
  startWeatherFetch,
  getWeatherList,
} from '../../core';

function* runFetchCity(action) {
  try {
    const result = yield call(fetchCityList, action.payload.cityName);
    
    yield put(endCityFetch(result));
    yield call(getSuggestions, result);
  } catch (e) {
     yield put(failCityFetch(e));
  }
}

function* getSuggestions(cityList) {
  const suggestions = map(cityList, city => ({
      id: city.id,
      label: city.name,
    })
  )
  yield put(setSuggestions({ suggestions }))
}

function* addSelectedSuggestion() {
  const state = yield select();
  const city = getSelectedValue(state);

  yield put(startWeatherFetch({ city }))
  yield put(clearSelectedValue())
}

function* runFetchWeather(action) {
  try {
    const state = yield select();
    const result = yield call(fetchWeatherByCityName, action.payload.city.name);
    const cityWeather = [{
        id: action.payload.city.id,
        name: action.payload.city.name,
        conditionIcon: result.current.condition.icon,
        conditionText: result.current.condition.text,
        temperature: result.current.temp_c,
        wind: result.current.wind_kph,
        pressure: result.current.pressure_mb,
    }];
    const currentWeatherList = getWeatherList(state)
    const resultArray = concat(pullAllBy(currentWeatherList, cityWeather, 'id'), cityWeather);

    yield put(endWeatherFetch(resultArray));
  } catch (e) {
    yield put(failWeatherFetch(e));
  }
}

function* removeCityById(action) {
  const state = yield select();
  const currentWeatherList = getWeatherList(state)

  const filteredSelectedCityIds = currentWeatherList.filter(weather => weather.id === action.payload.cityId);

  yield put(removeWeather({ cityIds: filteredSelectedCityIds }))
}

function* citySaga() {
  yield takeLatest(startCityFetch.toString(), runFetchCity);
  yield takeEvery(addSelectedCity.toString(), addSelectedSuggestion);
  yield takeEvery(startWeatherFetch.toString(), runFetchWeather);
  yield takeEvery(startRemoveWeather.toString(), removeCityById);
}

export { citySaga };