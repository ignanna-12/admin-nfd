import { CarTypes } from '../constants/car_constants';

let initialState = {
  imageCar: '',
  priceMax: 0,
  priceMin: 0,
  name: '',
  thumbnail: {},
  description: '',
  categoryId: '',
  colors: ['белый', 'синий'],
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case CarTypes.SET_IMAGE_CAR: {
      return {
        ...state,
        imageCar: action.payload,
      };
    }
    case CarTypes.SET_CAR_PRICEMAX: {
      return {
        ...state,
        priceMax: action.payload,
      };
    }
    case CarTypes.SET_CAR_PRICEMIN: {
      return {
        ...state,
        priceMin: action.payload,
      };
    }
    case CarTypes.SET_CAR_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case CarTypes.SET_CAR_FILE: {
      return {
        ...state,
        thumbnail: action.payload,
      };
    }
    case CarTypes.SET_CAR_DESCRIPTION: {
      return {
        ...state,
        description: action.payload,
      };
    }
    case CarTypes.SET_CAR_CATEGORY_ID: {
      return {
        ...state,
        categoryId: action.payload,
      };
    }
    case CarTypes.SET_CAR_COLORS: {
      return {
        ...state,
        colors: action.payload,
      };
    }
    default:
      return state;
  }
};

export default carReducer;
