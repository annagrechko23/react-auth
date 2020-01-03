import {SET_LOGGED_IN, UNAUTHENTICATED, SET_LOGGED_OUT } from "./action";

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {};
export default function(state = {}, action) {
  switch(action.type) {
    case SET_LOGGED_IN:
      console.log(state)
      return { ...state, authenticated: true };
    case SET_LOGGED_OUT:
      return {};
    case UNAUTHENTICATED:
     return {};
  }
  return state;
}