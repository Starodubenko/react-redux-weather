import { combineActions, handleAction } from 'redux-actios';
import update from 'immutability-helper';

import { addWeather, removeWeather} from './actions';

const defaultState = {
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

const handlers = combineActions({
    [addWeather.toString()]: (state, { weather }) => ({
        ...state,
        [weather.cityId]: weather,
    }),
    [removeWeather.toString()]: (state, { cityId }) => update(state, {
        $unset: [cityId]
    }),
})

export const weatherReducer = handleAction(handlers, defaultState);