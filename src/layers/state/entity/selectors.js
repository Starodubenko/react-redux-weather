import { reduce } from 'lodash-es';
import { ENTITY_REDUCER_NAME_SPACE as NS } from '../../utils';

export const getEntities = (state) => state[NS];

export const getCityList = (state) => getEntities(state)['cities'].data;
export const getCityMap = (state) => {
    return reduce(getCityList(state), (acc, item) => acc[item.id] = item, {});
};
export const getCityById = (state, id) => getCityMap(state)[id];