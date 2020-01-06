import { api } from './../plugins/axios';
import { history } from '../helpers/history';
import Cookies from 'universal-cookie';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const SET_LOGGED_OUT = 'SET_LOGGED_OUT';
export const AUTHENTICATED = 'AUTHENTICATED';
export const DELETE_ITEM = 'DELETE_ITEM';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GETALL_REQUEST = 'GETALL_REQUEST';
export const GETALL = 'GETALL';
export const FERFESH = 'FERFESH';
export const GET_PROFILE = 'GET_PROFILE';
export const GETALL_FAILURE = 'GETALL_FAILURE';
const cookies = new Cookies();
// actions
export const userActions = {
  signin,
  refresh,
  logout,
  getProfile,
  getAlbums,
};
function signin() {
  return dispatch => {
    api.auth.signin()
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
  function failure(error) {
    return { type: LOGIN_FAILURE, error }
  }
  function success(user) {
    return {
      type: LOGIN_SUCCESS,
      user
    }
  }
};
function refresh() {

  return dispatch => {
    api.auth.refresh(cookies.get('token'))
    .then(
      (token) => {
        cookies.set('token', token.token);
       dispatch(success())
      }
     
    ) .catch((err) => {
      console.log(err);
    })
   
  };
  function success() {
    return {type: FERFESH}
  }
};
function logout(authentication) {
  api.auth.signout();
  cookies.remove('token');
  history.push('/login');
  return { type: SET_LOGGED_OUT, authentication }
};

function getAlbums() {
  return dispatch => {
    api.albums.get()
      .then((response) => {
        dispatch(getAlbumsSuccess(response));
      }).catch((err) => {
        console.log(err);
      })
  };
}

export function getAlbumsSuccess(albums) {
  return {
    type: "GETALL",
    albums
  }
}
function getProfile() {
  return dispatch => {
    api.profile.get()
      .then((response) => {
        dispatch(getProfileSuccess(response));
      }).catch((err) => {
        console.log(err);
      })
  };
}

export function getProfileSuccess(user) {
  return {
    type: "GET_PROFILE",
    user
  }
}