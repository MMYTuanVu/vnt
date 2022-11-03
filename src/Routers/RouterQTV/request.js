const { default: axios } = require('axios');

export const request = axios.create({
  baseURL: 'http://localhost:5555/',
  withCredentials: true,
  xsrfHeaderName: 'XSRF-TOKEN',
  xsrfCookieName: 'cookie',
  headers: {
    cookie: 'cookie1=value; cookie2=value; cookie3=value;',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
