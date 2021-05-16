import { postAccess, postAuth } from '../../api/api';
import { setCookie } from '../../utils/setCookie';
import { authFetch, authSuccess, authFailed, regSuccess } from '../actions/auth_actions';

export const requestAccess = (userName, password) => {
  return async (dispatch) => {
    try {
      dispatch(authFetch());
      let data = await postAccess(userName, password);
      dispatch(regSuccess(data.id));
    } catch (error) {
      dispatch(authFailed());
    }
  };
};
export const requestAuth = (userName, password) => {
  return async (dispatch) => {
    try {
      dispatch(authFetch());
      let data = await postAuth(userName, password);
      dispatch(authSuccess(data.user_id));
      setCookie('access_token', data.access_token);
    } catch (error) {
      dispatch(authFailed());
    }
  };
};
