import { combineActions, handleAction } from 'redux-actios';
import update from 'immutability-helper';

import { setTemperatureFilter } from './actions';

const defaultState = {
    degree: 0,
}

const handlers = combineActions({
    [setTemperatureFilter.toString()]: (state, payload ) => update(state, {
        degree: { $set: payload.degree },
    }),
})

export const filterReducer = handleAction(handlers, defaultState);