import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './root';
import App from './components/app';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App}>
                <App />
            </Route>
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
);
