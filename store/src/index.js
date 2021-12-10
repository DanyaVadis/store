import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import App from './components/app/app';
import { Provider } from 'react-redux';
import store from './store';
import {HashRouter } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    ,
    document.getElementById('root')
);
