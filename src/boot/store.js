import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware} from 'react-router-redux'

import { FILTER_REDUCER_NAME_SPACE, WEATHER_REDUCER_NAME_SPACE } from '../layers/utils';
import { filterReducer, weatherReducer } from '../layers/state';

export const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
);

export const store = createStore(
    combineReducers({
        router: routerReducer,
        [FILTER_REDUCER_NAME_SPACE]: filterReducer, 
        [WEATHER_REDUCER_NAME_SPACE]: weatherReducer, 
    }),
    enhancer
);