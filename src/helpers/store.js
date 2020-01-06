import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import logger from "redux-logger";
import reducer from "../modules/reducer";
const middleware = [thunkMiddleware];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware, logger)));
  return store;
}