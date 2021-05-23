import instance from './api';
import instanceAuth from './api';

export const postAccess = (username, password) => {
  return { instance }.post('auth/register', { username, password }).then((response) => {
    return response.data;
  });
};

export const postAuth = (username, password) => {
  return { instanceAuth }.post('auth/login/', { username, password }).then((response) => {
    return response.data;
  });
};
