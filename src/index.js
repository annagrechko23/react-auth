import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import './assets/app.css';
import { Provider } from 'react-redux';
import configureStore from "./modules/store";
import { api } from './plugins/axios';

const data = api.albums.get();
let store = configureStore(data)
console.log(configureStore(data))
ReactDOM.render(
      <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
