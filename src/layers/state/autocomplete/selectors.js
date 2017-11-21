import { AUTOCOMPLETE_REDUCER_NAME_SPACE as NS } from '../../utils';

export const getAutocomplete = (state) => state[NS];
export const getSuggestions = (state) => getAutocomplete(state).suggestions;
export const getSelectedValue = (state) => getAutocomplete(state).selectedValue;