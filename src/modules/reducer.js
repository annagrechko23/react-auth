import { LOGIN_SUCCESS, SET_LOGGED_OUT, GETALL, GET_PROFILE } from "./action";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
let user = '';
user = cookies.get('token');
console.log(user)
const initialState = user !== '' ? { authentication: true, user: {}, albums: [] } : {authentication: false, user: {}, albums: []};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action)
      return { ...state, authentication: true };
    case SET_LOGGED_OUT:
      return {
        ...state,
        authentication: false
      };
    case GETALL:
      return {
        ...state,
        albums: action.albums
      };
    case GET_PROFILE:
      console.log(action)
      return {
        ...state,
        user: action.user,
      };
    default:
      return state
  }
}