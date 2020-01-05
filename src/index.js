import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/app.css';
import { Provider } from 'react-redux';
import configureStore from "./modules/store";

let store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
