import React from 'react';
import ReactDOM from 'react-dom';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import 'react-day-picker/lib/style.css';
import 'ol/ol.css';
import 'semantic-ui-css/semantic.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import {webReducers} from './reducers';
import {store, injectReducer} from 'istsos3-core';
injectReducer(store, webReducers);

ReactDOM.render(
    <I18nextProvider i18n={ i18n }>
        <Provider store={store}>
            <App />
        </Provider>
    </I18nextProvider>,
    document.getElementById('root')
);

registerServiceWorker();
