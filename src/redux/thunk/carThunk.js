import { postCar } from '../../api/api';

export const sendCar = (priceMin, priceMax, name, thumbnail, description, categoryId, colors) => {
  return async () => {
    try {
      let data = await postCar(
        priceMin,
        priceMax,
        name,
        thumbnail,
        description,
        categoryId,
        colors
      );
      alert(data);
    } catch (error) {
      alert(error);
    }
  };
};
