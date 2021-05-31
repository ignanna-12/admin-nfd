import { PointTypes } from '../constants/pointConstants';

let initialState = {
  points: {},
  isLoading: false,
  isError: false,
};

const pointReducer = (state = initialState, action) => {
  switch (action.type) {
    case PointTypes.POINTS_FETCH: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case PointTypes.SET_POINTS: {
      return {
        ...state,
        isLoading: false,
        points: action.payload,
      };
    }
    case PointTypes.POINTS_FAILED: {
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

export default pointReducer;
