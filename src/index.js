import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader';

import { AppRoutes } from "./Routes/AppRoutes";
import { store, history } from "./boot/store";

import './styles/index.scss';

const rootEl = document.getElementById('root');
// const render = (Component) =>
    ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer>
                <AppRoutes />
            </AppContainer>
        </ConnectedRouter>
    </Provider>,
    rootEl
);

// render(Welcome);

// if (module.hot) module.hot.accept('./layers/pages', () => render(Welcome));
