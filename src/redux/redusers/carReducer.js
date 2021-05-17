import { CarTypes } from '../constants/carConstants';

let initialState = {
  imageCar: '',
  priceMax: 1000,
  priceMin: 100,
  name: 'Форд фокус',
  thumbnail: {
    size: 45250,
    originalname:
      '5f21d9459d3a610b850fcd57_5ea9e5f3099b810b946c7234_97cfab8f5d3e6e963d8183e5ad70e734.png',
    mimetype: 'image/png',
    path:
      '/files/601c54bead015e0bb6997f4d_5f21d9459d3a610b850fcd57_5ea9e5f3099b810b946c7234_97cfab8f5d3e6e963d8183e5ad70e734.png',
  },
  description: 'ок',
  categoryId: '5e25c98d099b810b946c5d62',
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
