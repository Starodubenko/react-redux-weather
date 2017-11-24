import { createAction } from 'redux-actions';

export const startCityFetch = createAction('START_CITY_FETCH');
export const endCityFetch = createAction('END_CITY_FETCH');
export const failCityFetch = createAction('FAIL_CITY_FETCH');

export const startWeatherFetch = createAction('STAR_WEATHER_FETCH');
export const endWeatherFetch = createAction('END_WEATHER_FETCH');
export const failWeatherFetch = createAction('FAIL_WEATHER_FETCH');

export const startRemoveWeather = createAction('START_REMOVE_WEATHER');
export const removeWeather = createAction('REMOVE_WEATHER');
