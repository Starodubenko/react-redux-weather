import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

import { ENTITY_REDUCER_NAME_SPACE as NS } from '../../utils';
import { 
    startCityFetch,
    endCityFetch,
    failCityFetch,
    startWeatherFetch,
    endWeatherFetch,
    failWeatherFetch,
    removeWeather,
} from './actions';

const initialState = {
    cities: {
        isFetching: false,
        didInvalidate: false,
        data: []
    },
    weather: {
        isFetching: false,
        didInvalidate: false,
        data: []
    }
}

const reducer = {
    [startCityFetch]: (state, { payload }) => update(state, {
        cities: {
            isFetching: { $set: true }
        }
    }),
    [endCityFetch]: (state, { payload }) => update(state, {
        cities: {
            isFetching: { $set: false },
            didInvalidate: { $set: false },
            data: { $set: payload }
        }
    }),
    [failCityFetch]: (state, { payload }) => update(state, {
        cities: {
            isFetching: { $set: false },
            didInvalidate: { $set: false },
            data: { $set: [] }
        }
    }),
    [startWeatherFetch]: (state, { payload }) => update(state, {
        weather: {
            isFetching: { $set: true }
        }
    }),
    [endWeatherFetch]: (state, { payload }) => update(state, {
        weather: {
            isFetching: { $set: false },
            didInvalidate: { $set: false },
            data: { $set: payload }
        }
    }),
    [failWeatherFetch]: (state, { payload }) => update(state, {
        weather: {
            isFetching: { $set: false },
            didInvalidate: { $set: false },
            data: { $set: [] }
        }
    }),
    [removeWeather]: (state, { payload }) => update(state, {
        weather: {
            data: { $set: payload }
        }
    }),
};

export const entityReducer = { [NS]: handleActions(reducer, initialState) };