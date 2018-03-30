import http from '../common/http';

export const getUserList = () => {
  return http.get('/users');
};
