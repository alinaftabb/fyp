import axios from 'axios';
import { getOnLineStatus } from './NavigatorOnline';

const instance = axios.create({
  baseURL: `https://dummyjson.com/`,
});

instance.interceptors.request.use(
  function (config) {
    if (getOnLineStatus()) {
      config.headers['Content-type'] = 'application/json';
    } else {
      return Promise.reject({
        response: {
          data: {
            message:
              'You are currently offline. Please check your internet connection and try again later.',
          },
        },
      });
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
