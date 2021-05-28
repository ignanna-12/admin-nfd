import * as axios from 'axios';
import { getCookie } from '../utils/getCookie';

export const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://api-factory.simbirsoft1.com/api/' : '',
  headers: {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
  },
});
export const instanceAuth = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://api-factory.simbirsoft1.com/api/' : '',
  headers: {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    Authorization: 'Basic dmpoamRzazIzNDo0Y2JjZWE5NmRl',
  },
});

export const instanceAdmin = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://api-factory.simbirsoft1.com/api/' : '',
  headers: {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    Authorization: 'Bearer ' + getCookie('access_token'),
  },
});

export const postAccess = (username, password) => {
  return instance.post('auth/register', { username, password }).then((response) => {
    return response.data;
  });
};

export const postCar = (priceMin, priceMax, name, thumbnail, description, categoryId, colors) => {
  return instanceAdmin
    .post('db/car', {
      priceMin: priceMin,
      priceMax: priceMax,
      name: name,
      thumbnail: thumbnail,
      description: description,
      categoryId: categoryId,
      colors: colors,
    })
    .then((response) => {
      return response.data;
    });
};

export const postAuth = (username, password) => {
  return instanceAuth.post('auth/login/', { username, password }).then((response) => {
    return response.data;
  });
};

export const getCities = () => {
  return instance.get('db/city').then((response) => {
    return response.data;
  });
};

export const getPoints = () => {
  return instance.get('db/point/').then((response) => {
    return response.data;
  });
};

export const getCars = () => {
  return instance.get('db/car/').then((response) => {
    return response.data;
  });
};

export const getRate = () => {
  return instance.get('db/rate/').then((response) => {
    return response.data;
  });
};

export const getCategory = () => {
  return instance.get('db/category/').then((response) => {
    return response.data;
  });
};

export const getOrderStatus = () => {
  return instance.get('db/orderStatus/').then((response) => {
    return response.data;
  });
};

export const getOrder = (orderId) => {
  return instance.get('db/order/' + orderId).then((response) => {
    return response.data;
  });
};

export const getOrders = (page, orderStatusId, city) => {
  return instanceAdmin
    .get('db/order?page=' + page + '&limit=15' + orderStatusId + city)
    .then((response) => {
      return response.data;
    });
};

export const getFullOrders = () => {
  return instanceAdmin.get('db/order').then((response) => {
    return response.data;
  });
};
