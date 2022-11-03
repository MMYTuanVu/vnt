import { SERVER_PORT } from '~/dotEnvClient';
import axios from 'axios';
export const AxiosCookie = axios.create({
  baseURL: SERVER_PORT,
  withCredentials: true,
  xsrfHeaderName: 'XSRF-TOKEN',
  xsrfCookieName: 'cookie',
});

export const Axios = axios.create({
  baseURL: SERVER_PORT,
});
