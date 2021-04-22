// @ts-check

import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';

import App from './components/App.jsx';
import reducers from './reducers.js';
import { updateText, resetText } from './actions.js';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

// BEGIN (write your solution here)
const containerElement = document.getElementById('container');
store.subscribe(() => {
  const state = store.getState();
  ReactDOM.render(
    <App dispatch={store.dispatch} text={state.text} updateText={updateText} resetText={resetText}/>,
    containerElement,
  );
});

// Первый раз нужно отрисовать руками
ReactDOM.render(
  <App dispatch={store.dispatch}  updateText={updateText} resetText={resetText}/>,
  containerElement,
);
// END
