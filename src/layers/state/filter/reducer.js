import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

import { FILTER_REDUCER_NAME_SPACE as NS } from '../../utils';
import { setTemperatureFilter } from './actions';

const initialState = {
    degree: 0,
}

const reducer = {
    [setTemperatureFilter]: (state, payload ) => update(state, {
        degree: { $set: payload.degree },
    }),
};

export const filterReducer = { [NS]: handleActions(reducer, initialState) };