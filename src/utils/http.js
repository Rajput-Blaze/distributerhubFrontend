import axios from 'axios';
import URL from '../globals/config';
import * as session from '../utils/session';
import history from '../history';
import { APIBLOCK } from '../globals/constant';
import showNotification from '../services/notificationService';

/**Create a instance of axios with a custom config */
export const http = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'multipart/form-data',
  },
});

export const ERROR_400 = 400;
export const ERROR_401 = 401;

/**Add a request interceptor */
http.interceptors.request.use(
  function (config) {
    // var today = new Date();
    // var date =
    //   today.getFullYear() +
    //   "-" +
    //   (today.getMonth() + 1) +
    //   "-" +
    //   today.getDate();
    // if (date === "2040-12-14") {
    //   // showNotification("danger", APIBLOCK);
    //   return false;
    // }
    const token = session.getSessionToken();
    if (token) config.headers['x-token'] = 'Bearer ' + token;
    // if (token) config.headers.Authorization = token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

/**Add a response interceptor */
http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      if (error.response.status === ERROR_400) {
        // showNotification('danger',error.response.data.message);
      }
      if (error.response.status === ERROR_401) {
        /**Add a 401 response interceptor*/
        localStorage.clear();
        history.push('/');
      } else {
        return Promise.reject(error);
      }
    }
  }
);
