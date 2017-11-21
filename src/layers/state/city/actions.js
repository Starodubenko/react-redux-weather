import { createAction } from 'redux-actions';

export const addSelectedCity = createAction('ADD_SELECTED_CITY');
export const addCity = createAction('ADD_CITY');
export const startRemoveCity = createAction('START_REMOVE_CITY');
export const removeCity = createAction('REMOVE_CITY');
