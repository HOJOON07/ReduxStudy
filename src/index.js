import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './Router';
import { createStore } from 'redux';
import combineReducer from './store/index';

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = createStore(combineReducer, reduxDevTool);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={rootReducer}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
