import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Features } from 'react-tiny-feature-switch';
import axios from 'axios';
import { navigate } from '@reach/router';

import features from './features.json';
import { RootStore } from 'Stores';
import { Request } from 'Utils/request';
import App from './app';
import * as serviceWorker from './service-worker';
import './index.scss';

const axiosInstance = axios.create({
  baseURL: process.env.DAXKO_APP_API_URL,
});

const store = new RootStore({ request: new Request(axiosInstance), navigate });

const rootElement = document.getElementById('root');

const render = (Component: any) => {
  ReactDOM.render(
    <Provider store={store}>
      <Features features={features}>
        <Component />
      </Features>
    </Provider>,
    rootElement,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
