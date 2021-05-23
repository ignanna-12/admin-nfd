import { AuthTypes } from '../constants/authConstants';

let initialState = {
  userIdReg: '',
  userIdLogin: '',
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
        userIdLogin: action.payload,
      };
    }
    case AuthTypes.REG_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userIdReg: action.payload,
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
