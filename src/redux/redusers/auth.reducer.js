import { AuthTypes } from '../constants/auth_constants';

let initialState = {
  user_id_reg: '',
  user_id_login: '',
  isLoading: false,
  isError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.AUTH_FETCH: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case AuthTypes.AUTH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user_id_login: action.payload,
      };
    }
    case AuthTypes.REG_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user_id_reg: action.payload,
      };
    }
    case AuthTypes.AUTH_FAILED: {
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

export default authReducer;
