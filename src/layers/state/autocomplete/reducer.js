import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

import { AUTOCOMPLETE_REDUCER_NAME_SPACE as NS } from '../../utils';
import { setSuggestions, clearSuggestions } from './actions';

const initialState = {
    suggestions: [],
}

const reducer = {
    [setSuggestions]: (state, { payload } ) => update(state, {
        suggestions: { $set: payload.suggestions },
    }),
    [clearSuggestions]: (state, { payload } ) => update(state, {
        suggestions: [],
    }),
};

export const autocompleteReducer = { [NS]: handleActions(reducer, initialState) };