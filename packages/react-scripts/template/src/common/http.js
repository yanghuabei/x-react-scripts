/**
 * @file http.js http service
 * @author exodia(d_xinxin@163.com)
 */
import axios from 'axios';

const IS_DEV = process.env.NODE_ENV === 'development';

const http = axios.create({
  baseURL: window.location.search.includes('__mock__') ? '/mock/api' : '/api',
  timeout: 15 * 1000,
});

if (IS_DEV) {
  http.interceptors.request.use(request => {
    console.log('request start:', request);
    return request;
  });
}

/*
response schema:
{
  // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',

  // `headers` the headers that the server responded with
  // All header names are lower cased
  headers: {},

  // `config` is the config that was provided to `axios` for the request
  config: {},

  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}
 */
http.interceptors.response.use(
  response => response.data,
  error => {
    if (IS_DEV) {
      console.error('request error:', error);
    }

    return Promise.reject(error);
  }
);

export default http;
