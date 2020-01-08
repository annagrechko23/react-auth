import { LOGIN_SUCCESS, SET_LOGGED_OUT, GETALL, GET_PROFILE, CHECK_FAVOURITE, EDIT, HANDLE_ON_CHANGE } from "./action";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
let token = cookies.get('token');
const initialState = { authentication: Boolean(token), user: {}, albums: [] }
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authentication: true, user: action.user };
    case SET_LOGGED_OUT:
      token = '';
      return {
        ...state,
        authentication: false,
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
    case EDIT:
      return {
        ...state,
        user: action.user,
      };
    case HANDLE_ON_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.props]: action.value
        },
      };
    case CHECK_FAVOURITE:
      return {
        ...state,
        albums: state.albums.map(i => {
          if (i.id === action.album.id) {
            return action.album
          } return i
        })

      };
    default:
      return state
  }
}