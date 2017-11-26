import { select, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { concat, pullAllBy } from 'lodash-es';
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
    yield put(setSuggestions({ suggestions: result }))
  } catch (e) {
     yield put(failCityFetch(e));
  }
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
    result[0].id = action.payload.city.id;
    result[0].name = action.payload.city.name;
    const currentWeatherList = getWeatherList(state)
    const resultArray = concat(pullAllBy(currentWeatherList, result, 'id'), result);

    yield put(endWeatherFetch(resultArray));
  } catch (e) {
    yield put(failWeatherFetch(e));
  }
}

function* removeCityById(action) {
  const state = yield select();
  const currentWeatherList = getWeatherList(state)

  const filteredSelectedCityIds = currentWeatherList.filter(weather => weather.id !== action.payload.cityId);

  yield put(removeWeather(filteredSelectedCityIds))
}

function* citySaga() {
  yield takeLatest(startCityFetch.toString(), runFetchCity);
  yield takeEvery(addSelectedCity.toString(), addSelectedSuggestion);
  yield takeEvery(startWeatherFetch.toString(), runFetchWeather);
  yield takeEvery(startRemoveWeather.toString(), removeCityById);
}

export { citySaga };