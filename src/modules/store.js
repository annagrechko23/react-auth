import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import logger from "redux-logger";
import reducer from "./reducer";

export default function configureStore(initialState) {
  console.log(initialState)
  const store = createStore(reducer, initialState, applyMiddleware(logger, thunkMiddleware));
  return store;
}