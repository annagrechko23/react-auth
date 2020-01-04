import {SET_LOGGED_IN, UNAUTHENTICATED, SET_LOGGED_OUT, GETALL_SUCCESS } from "./action";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
let user = cookies.get('token');
const initialState = user ? { loggedIn: true, user } : {};
export default function(state = {}, action) {
  switch(action.type) {
    case SET_LOGGED_IN:

      return { ...state, authentication: true };
    case SET_LOGGED_OUT:
      return {};
      case GETALL_SUCCESS:
        return {
          ...state,
          albums: action.albums
        };
    case UNAUTHENTICATED:
     return {};
  }
  return state;
}