import { api } from './../plugins/axios';
import { history } from './history';
import Cookies from 'universal-cookie';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_LOGGED_OUT = 'SET_LOGGED_OUT';
export const AUTHENTICATED = 'AUTHENTICATED';
export const DELETE_ITEM = 'DELETE_ITEM';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GETALL_REQUEST = 'GETALL_REQUEST';
export const GETALL_SUCCESS = 'GETALL_SUCCESS';
export const GETALL_FAILURE = 'GETALL_FAILURE';
const cookies = new Cookies();
// actions
export const userActions = {
  signin,
  refresh,
  logout,
  getVendor,
};
function signin() {
  return dispatch => {
    api.auth.signup()
      .then(
        ({ token, ...user }) => {
          dispatch(success(user));
          cookies.set('token', token);
          history.push('/playlist');
        },
        error => {
          dispatch(failure(error));
        }
      );
  };
  function failure(error) { return { type: LOGIN_FAILURE, error } }
  function success(user) { return { type: LOGIN_SUCCESS, user } }
};
function refresh() {
  return dispatch => {
    api.auth.refresh(cookies.get('token'))
      .then(
        (token) => {
          console.log(token)
          cookies.set('token', token);
        },
      );
  };

};
function logout() {
  api.auth.signout();
  cookies.remove('token');
  history.push('/login');
  return { type: SET_LOGGED_OUT }
};
function getAll() {
  api.albums.get()
  return { type: GETALL_SUCCESS }
}

function getVendor(){
  return dispatch => {
    api.albums.get()
      .then((response)=>{
        console.log(response);
        dispatch(changeVendorsList(response));
      }).catch((err)=>{
      console.log("Error");
      console.log(err);
    })
  };
}

export function changeVendorsList(albums){
  console.log(albums)
  return{
    type: "GETALL_SUCCESS",
    albums: albums
  }
}
