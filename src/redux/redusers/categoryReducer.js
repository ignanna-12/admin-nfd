import { CategoryTypes } from '../constants/categoryConstants';

let initialState = {
  category: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CategoryTypes.SET_CATEGORY: {
      return {
        ...state,
        category: action.payload,
      };
    }
    default:
      return state;
  }
};

export default categoryReducer;
