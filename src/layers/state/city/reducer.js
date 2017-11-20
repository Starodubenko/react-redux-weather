import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

import { CITY_REDUCER_NAME_SPACE as NS } from '../../utils';
import { addCity, removeCity } from './actions';

const initialState = {
    selectedCities: ['1', '2', '3', '4'],
}

const reducer = {
    [addCity]: (state, { payload }) => update(state, {
        $selectedCities: { $push: payload.cityId}
    }),
    [removeCity]: (state, { payload }) => update(state, {
        $selectedCities: { $$unshift: payload.cityId }
    }),
};

export const weatherReducer = { [NS]: handleActions(reducer, initialState) };