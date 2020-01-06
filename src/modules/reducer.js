import { LOGIN_SUCCESS, SET_LOGGED_OUT, GETALL, GET_PROFILE, REFRESH } from "./action";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
let user = cookies.get('token');
const initialState = user !== undefined ? { authentication: true, user: {}, albums: [] } : { authentication: false, user: {}, albums: [] };
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authentication: true, user: action.user };
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
      return {
        ...state,
        user: action.user,
      };
    default:
      return state
  }
}