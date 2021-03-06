import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

import { FILTER_REDUCER_NAME_SPACE as NS } from '../../utils';
import { setTemperatureFilter, setSuggestionsFilter, switchTemperatureFilter } from './actions';

const initialState = {
    degree: "0",
    active: true,
}

const reducer = {
    [setTemperatureFilter]: (state, { payload } ) => update(state, {
        degree: { $set: payload.degree },
    }),
    [setSuggestionsFilter]: (state, { payload } ) => update(state, {
        degree: { $set: payload.suggestions },
    }),
    [switchTemperatureFilter]: (state, { payload } ) => update(state, {
        active: { $set: payload.active },
    }),
};

export const filterReducer = { [NS]: handleActions(reducer, initialState) };