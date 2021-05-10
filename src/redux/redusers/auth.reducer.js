import { AuthTypes } from '../constants';

let initialState = {
  username: '',
  password: '',
  access_token: '',
  refresh_token: '',
  expires_in: 0,
  user_id: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.SET_USER_NAME: {
      return {
        ...state,
        username: action.payload,
        password: '',
        access_token: '',
        refresh_token: '',
        expires_in: 0,
        user_id: '',
      };
    }
    case AuthTypes.SET_PASSWORD: {
      return {
        ...state,
        password: action.payload,
        access_token: '',
        refresh_token: '',
        expires_in: 0,
        user_id: '',
      };
    }
    case AuthTypes.SET_ACCESS_TOKEN: {
      return {
        ...state,
        access_token: action.payload,
        refresh_token: '',
        expires_in: 0,
        user_id: '',
      };
    }
    case AuthTypes.SET_REFRESH_TOKEN: {
      return {
        ...state,
        refresh_token: action.payload,
        expires_in: 0,
        user_id: '',
      };
    }
    case AuthTypes.SET_EXPIRES_IN: {
      return {
        ...state,
        expires_in: action.payload,
        user_id: '',
      };
    }
    case AuthTypes.SET_USER_ID: {
      return {
        ...state,
        user_id: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
