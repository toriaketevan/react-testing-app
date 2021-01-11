import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from './middlewares/async';
import sateValidator from './middlewares/state-validator';
import reducers from './reducers';

export default function({ children, initialState = {} }) {
    const store = createStore(reducers, initialState, applyMiddleware(async, sateValidator));
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}