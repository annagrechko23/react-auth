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
export const EDIT = 'EDIT';
export const GETALL = 'GETALL';
export const CHECK_FAVOURITE = 'CHECK_FAVOURITE';
export const FERFESH = 'FERFESH';
export const GET_PROFILE = 'GET_PROFILE';
export const HANDLE_ON_CHANGE = 'HANDLE_ON_CHANGE';
export const GETALL_FAILURE = 'GETALL_FAILURE';
const cookies = new Cookies();
// actions
const failure = error => {
  return { type: LOGIN_FAILURE, error }
}
const signinSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}
export const signin = () =>
  async dispatch => {
    try {
      const { token, ...user } = await api.auth.signin()
      dispatch(signinSuccess(user));
      cookies.set('token', token);
      history.push('/playlist');
    } catch (err) {
      dispatch(failure(err));
    }
  };
const success = () => {
  return { type: FERFESH }
}
export const refresh = () =>
  async dispatch => {
    try {
      const token = await api.auth.refresh(cookies.get('token'))
      cookies.set('token', token.token);
      dispatch(success())
    } catch (err) {
      console.log(err);
    }
  };
export const logoutUser = () => {
  return {
    type: SET_LOGGED_OUT,
    authentication: false,
  }
}
export const logout = () =>
  async dispatch => {
    await api.auth.signout();
    cookies.remove('token');
    dispatch(logoutUser());
    history.push('/login');

  };
const getAlbumsSuccess = albums => {
  return {
    type: "GETALL",
    albums
  }
}
export const getAlbums = () =>
  async dispatch => {
    try {
      const albums = await api.albums.get()
      dispatch(getAlbumsSuccess(albums));
    } catch (err) {
      console.log(err);
    }
  }
const updatedFavourite = (album) => {
  return {
    type: "CHECK_FAVOURITE",
    album
  }
}
export const checkFavourite = (album) =>
  async dispatch => {
    try {
      await api.albums.put({ id: album.id, payload: album })
      dispatch(updatedFavourite(album));
    } catch (err) {
      console.log(err);
    }
  };
const update = (user) => {
  return {
    type: "EDIT",
    user
  }
}
export const edit = (payload) =>
  async dispatch => {
    try {
      await api.profile.put(payload)
      dispatch(update(payload));
      history.push('/playlist');
    } catch (err) {
      console.log(err);
    }
  };
const handleOnChangeProps = (props, value) => {
  return {
    type: "HANDLE_ON_CHANGE",
    props: props,
    value: value
  }
}
export const onChangeProps = (props, event) => dispatch => dispatch(handleOnChangeProps(props, event.target.value));

const getProfileSuccess = user => {
  return {
    type: "GET_PROFILE",
    user
  }
}
export const getProfile = () =>

  async dispatch => {
    try {
      const profile = await api.profile.get();
      dispatch(getProfileSuccess(profile));
    } catch (err) {
      console.log(err);
    }
  }

