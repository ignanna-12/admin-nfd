import { getCars, postCar } from '../../api/api';
import { setCars, carsFetch, carsFailed } from '../actions/carActions';

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

export const requestCars = (page, category) => {
  return async (dispatch) => {
    try {
      dispatch(carsFetch());
      let data = await getCars(page, category);
      dispatch(setCars(data));
    } catch (error) {
      dispatch(carsFailed());
    }
  };
};
