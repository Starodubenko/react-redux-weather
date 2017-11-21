import { select, call, put, takeLatest } from 'redux-saga/effects';
import { fetchCities } from '../../api';
import { startCityFetch, endCityFetch, failCityFetch, getCityList } from '../../core';
import { pullAllBy, concat } from "lodash-es";

function* runFetchCity(action) {
   try {
      const state = yield select();
      const result = yield call(fetchCities, action.payload.cityName);
      const currentCityList = getCityList(state)
      const preparedResult = concat(pullAllBy(currentCityList, result, 'id'), result)
      
      yield put(endCityFetch(preparedResult));
   } catch (e) {
      yield put(failCityFetch(e));
   }
}

function* citySaga() {
  yield takeLatest(startCityFetch.toString(), runFetchCity);
}

export { citySaga };