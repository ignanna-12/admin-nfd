import { CarTypes } from '../constants/carConstants';

export const setImageCar = (image) => ({ type: CarTypes.SET_IMAGE_CAR, payload: image });
export const setCarPriceMax = (price) => ({ type: CarTypes.SET_CAR_PRICEMAX, payload: price });
export const setCarPriceMin = (price) => ({ type: CarTypes.SET_CAR_PRICEMIN, payload: price });
export const setCarName = (name) => ({ type: CarTypes.SET_CAR_NAME, payload: name });
export const setCarFile = (file) => ({ type: CarTypes.SET_CAR_FILE, payload: file });
export const setCarDescription = (description) => ({
  type: CarTypes.SET_CAR_DESCRIPTION,
  payload: description,
});
export const setCarCategoryId = (id) => ({ type: CarTypes.SET_CAR_CATEGORY_ID, payload: id });
export const setCarColors = (colors) => ({ type: CarTypes.SET_CAR_COLORS, payload: colors });
export const setCars = (cars) => ({ type: CarTypes.SET_CARS, payload: cars });
export const carsFailed = () => ({ type: CarTypes.CARS_FAILED });
export const carsFetch = () => ({ type: CarTypes.CARS_FETCH });
