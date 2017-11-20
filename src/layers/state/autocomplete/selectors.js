import { FILTER_REDUCER_NAME_SPACE as NS } from '../../utils';

export const getAutocomplete = (state) => state[NS];
export const getSuggestions = (state, cityId) => getAutocomplete(state).suggestions;