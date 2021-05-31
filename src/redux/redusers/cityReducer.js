import { CityTypes } from '../constants/cityConstants';

let initialState = {
  city: [],
  cities: {},
  isLoading: false,
  isError: false,
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CityTypes.SET_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    case CityTypes.CITIES_FETCH: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case CityTypes.SET_CITIES: {
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    }
    case CityTypes.CITIES_FAILED: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default cityReducer;
