import instance from './api';

export const getCategory = () => {
  return { instance }.get('db/category/').then((response) => {
    return response.data;
  });
};
