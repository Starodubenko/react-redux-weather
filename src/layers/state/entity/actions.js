import { createAction } from 'redux-actions';

export const startCityFetch = createAction('START_CITY_FETCH');
export const endCityFetch = createAction('END_CITY_FETCH');
export const failCityFetch = createAction('FAIL_CITY_FETCH');
