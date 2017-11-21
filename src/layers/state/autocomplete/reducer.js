import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

import { AUTOCOMPLETE_REDUCER_NAME_SPACE as NS } from '../../utils';
import { setSuggestions, clearSuggestions, selectValue , clearSelectedValue} from './actions';

const initialState = {
    suggestions: [],
    selectedValue: null,
}

const reducer = {
    [selectValue]: (state, { payload } ) => update(state, {
        selectedValue: { $set: payload.value },
    }),
    [clearSelectedValue]: (state, { payload } ) => update(state, {
        selectedValue: { $set: null },
    }),
    [setSuggestions]: (state, { payload } ) => update(state, {
        suggestions: { $set: payload.suggestions },
    }),
    [clearSuggestions]: (state, { payload } ) => update(state, {
        suggestions: [],
    }),
};

export const autocompleteReducer = { [NS]: handleActions(reducer, initialState) };