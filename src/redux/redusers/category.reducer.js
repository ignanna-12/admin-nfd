import { CategoryTypes } from '../constants/category_constants';

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
