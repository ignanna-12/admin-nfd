import { CarTypes } from '../constants/car_constants';

export const setImageCar = (image) => ({ type: CarTypes.SET_IMAGE_CAR, payload: image });
