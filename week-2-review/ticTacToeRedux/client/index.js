/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

render(
  // wrap the App in the Provider Component and pass in the store
  // App is to level component, and it is wrapped with redux
  // The entire react app has access to the store now!
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('contents')
);


