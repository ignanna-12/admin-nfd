import { CityTypes } from '../constants/cityConstants';

let initialState = {
  city: [],
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CityTypes.SET_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    default:
      return state;
  }
};

export default cityReducer;
