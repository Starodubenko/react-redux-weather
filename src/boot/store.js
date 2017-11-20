import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware} from 'react-router-redux'

import { filterReducer, weatherReducer, entityReducer, autocompleteReducer } from '../layers/state';
import { cityMiddleware } from '../layers/core';

export const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        ...middleware, 
        cityMiddleware,
    ),
);

export const store = createStore(
    combineReducers({
        router: routerReducer,
        ...filterReducer, 
        ...weatherReducer,
        ...entityReducer,
        ...autocompleteReducer,
    }),
    enhancer
);