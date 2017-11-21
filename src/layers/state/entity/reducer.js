import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

import { ENTITY_REDUCER_NAME_SPACE as NS } from '../../utils';
import { startCityFetch, endCityFetch, failCityFetch} from './actions';

const initialState = {
    cities: {
        isFetching: false,
        didInvalidate: false,
        data: [{
            id: '1',
            name: 'Moscow',
            degree: 2,
            wind: 5,
            pressure: 752,
        },{
            id: '2',
            name: 'SPB',
            degree: -2,
            wind: 8,
            pressure: 730,
        }]
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
};

export const entityReducer = { [NS]: handleActions(reducer, initialState) };