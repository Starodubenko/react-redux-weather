import { select, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { map, without } from 'lodash-es';
import { fetchCities } from '../../api';
import {
  startCityFetch,
  endCityFetch,
  failCityFetch,
  getCityList,
  setSuggestions,
  getSelectedValue,
  addCity,
  clearSelectedValue,
  addSelectedCity,
  getSelectedCityIds,
  startRemoveCity,
  removeCity,
} from '../../core';
import { pullAllBy, concat } from "lodash-es";

function* runFetchCity(action) {
  try {
    const state = yield select();
    const result = yield call(fetchCities, action.payload.cityName);
    const currentCityList = getCityList(state)
    const preparedResult = concat(pullAllBy(currentCityList, result, 'id'), result)
    
    yield put(endCityFetch(preparedResult));
    yield call(getSuggestions, preparedResult);
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
  const cityId = getSelectedValue(state);

  yield put(addCity({ cityId }))
  yield put(clearSelectedValue())
}

function* removeCityById(action) {
  const state = yield select();
  const selectedCityIds = getSelectedCityIds(state);

  const filteredSelectedCityIds = without(selectedCityIds, action.payload.cityId);

  yield put(removeCity({ cityIds: filteredSelectedCityIds }))
}

function* citySaga() {
  yield takeLatest(startCityFetch.toString(), runFetchCity);
  yield takeEvery(addSelectedCity.toString(), addSelectedSuggestion);
  yield takeEvery(startRemoveCity.toString(), removeCityById);
}

export { citySaga };