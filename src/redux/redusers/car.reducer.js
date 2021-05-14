import { CarTypes } from '../constants/car_constants';

let initialState = {
  imageCar: '',
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case CarTypes.SET_IMAGE_CAR: {
      return {
        ...state,
        imageCar: action.payload,
      };
    }
    default:
      return state;
  }
};

export default carReducer;
