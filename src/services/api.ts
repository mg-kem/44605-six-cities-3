import axios, { AxiosInstance } from 'axios';
import { getToken } from './token';
import { BACKEND_URL, REQUEST_TIMEOUT } from '../const/const';

/** Функция, которая возвращает экземпляр Axios - AxiosInstance*/
export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  // interceptor - перехватчик запросов. Нужен для того, чтобы добавлять токен в заголовок запроса.
  api.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    });
  return api;
};
