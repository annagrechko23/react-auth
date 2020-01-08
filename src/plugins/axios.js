
import Axios from 'axios';
import configureStore from "../helpers/store";

import { refresh, logout } from './../modules/action';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
let store = configureStore()

const axios = Axios.create({
  baseURL: 'http://localhost:4000/api'
});

 axios.interceptors.request.use(
   config => {
    config.headers.authorization = cookies.get('token');
    return config;
  }
);
axios.interceptors.response.use(
  async response => response.data,
  async error => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        await store.dispatch(logout())
      } else if (status === 419) {
        return store.dispatch(refresh())
          .then(() => {
           return axios.request(error.config)
          })
      }	
    } else {
      throw new Error(error.message || 'error.network');
    }
  }
);
export const api = {
  profile: {
    get: () => axios.get('/profile'),
    put: data => axios.put('/profile', data)
  },
  albums: {
    get: () => axios.get('/albums'),
    put: ({ id, payload }) => axios.put(`/albums/${id}`, payload)
  },
  auth: {
    signin: () => axios.post('/auth/signin'),
    refresh: data => axios.patch('/auth/refresh', data),
    signout: () => axios.post('/auth/signout'),
    signup: data => axios.post('/auth/signup', data)
  },
};

