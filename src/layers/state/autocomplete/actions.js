import { createAction } from 'redux-actions';

export const selectValue = createAction('SELECT_VALUE');
export const clearSelectedValue = createAction('CLEAR_SELECTED_VALUE');
export const setSuggestions = createAction('SET_SUGGESTIONS');
export const clearSuggestions = createAction('CLEAR_SUGGESTIONS');
