import { WEATHER_REDUCER_NAME_SPACE as NS } from '../../utils';

export const getWeatherMap = (state) => state[NS];
export const getWeatherByCityId = (state, cityId) => getWeatherMap(state)[cityId];