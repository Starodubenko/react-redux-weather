import { WEATHER_REDUCER_NAME_SPACE as NS } from '../../utils';

export const getWeatherList = (state) => state[NS];
export const getWeatherByCityId = (state, cityId) => getWeatherList(state)[cityId];