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
export const signin = () => {
  return dispatch => {
    api.auth.signin()
      .then(
        ({ token, ...user }) => {
          dispatch(signinSuccess(user));
          cookies.set('token', token);
          history.push('/playlist');
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

};
const success = () => {
  return { type: FERFESH }
}
export const refresh = () => {
  return dispatch => {
    api.auth.refresh(cookies.get('token'))
      .then(
        token => {
          cookies.set('token', token.token);
          dispatch(success())
        }
      ).catch((err) => {
        console.log(err);
      })
  };
};

export const logout = authentication => {
  api.auth.signout();
  cookies.remove('token');
  history.push('/login');
  return { type: SET_LOGGED_OUT, authentication }
};
const getAlbumsSuccess = albums => {
  return {
    type: "GETALL",
    albums
  }
}
export const getAlbums = () => {
  return dispatch => {
    api.albums.get()
      .then((response) => {
        console.log('response', response)
        dispatch(getAlbumsSuccess(response));
      }).catch((err) => {
        console.log(err);
      })
  };
}
const updatedFavourite = (album) => {
  return {
    type: "CHECK_FAVOURITE",
    album
  }
}
export const checkFavourite = (album) => {
  console.log(album)
  return dispatch => {
    api.albums.put({ id: album.id, payload: album })
      .then(() => {
        dispatch(updatedFavourite(album));
      })
  }
};
const update = (user) =>{
  return{
      type: "EDIT",
      user
  }
}
export const edit = (payload) => {
  console.log(payload)
  return dispatch => {
    api.profile.put(payload)
      .then(() => {
        dispatch(update(payload));
      })
  }

};

const getProfileSuccess = user => {
  return {
    type: "GET_PROFILE",
    user
  }
}
export const getProfile = () => {
  return dispatch => {
    api.profile.get()
      .then((response) => {
        dispatch(getProfileSuccess(response));
      }).catch((err) => {
        console.log(err);
      })
  };
}

