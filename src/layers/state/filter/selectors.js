import { FILTER_REDUCER_NAME_SPACE as NS } from '../../utils';

export const getFilters = (state) => state[NS];
export const getDegree = (state, cityId) => getFilters(state).degree;
export const isTemperatureFilterActive = (state, cityId) => getFilters(state).active;