import instanceAdmin from './api';

export const postCar = (priceMin, priceMax, name, thumbnail, description, categoryId, colors) => {
  return { instanceAdmin }
    .post('db/car', { priceMin, priceMax, name, thumbnail, description, categoryId, colors })
    .then((response) => {
      return response.data;
    });
};
