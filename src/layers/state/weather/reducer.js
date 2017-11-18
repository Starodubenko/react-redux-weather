import { handleActions } from 'redux-actions';
import update from 'immutability-helper';

import { WEATHER_REDUCER_NAME_SPACE as NS } from '../../utils';
import { addWeather, removeWeather} from './actions';

const initialState = {
    '1': {
        id: '1',
        name: 'Moscow',
        degree: '7',
        wind: '5',
        pressure: '752',
    },
    '2': {
        id: '2',
        name: 'SPB',
        degree: '2',
        wind: '8',
        pressure: '730',
    }
}

const reducer = {
    [addWeather]: (state, { weather }) => ({
        ...state,
        [weather.cityId]: weather,
    }),
    [removeWeather]: (state, { cityId }) => update(state, {
        $unset: [cityId]
    }),
};

export const weatherReducer = { [NS]: handleActions(reducer, initialState) };