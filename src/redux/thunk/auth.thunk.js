import { postAccess, postAuth } from '../../api/api';
import {
  setUserName,
  setPassword,
  setAccessToken,
  setRefreshToken,
  setExpiresIn,
  setUserId,
} from '../actions/actions';

export const requestAccess = (userName, password) => {
  return async (dispatch) => {
    let data = await postAccess(userName, password);
    dispatch(setPassword(data.password));
    dispatch(setUserName(data.username));
    dispatch(setUserId(data.id));
  };
};
export const requestAuth = (userName, password) => {
  return async (dispatch) => {
    let data = await postAuth(userName, password);
    dispatch(setUserId(data.user_id));
    dispatch(setAccessToken(data.access_token));
    dispatch(setRefreshToken(data.refresh_token));
    dispatch(setExpiresIn(data.expires_in));
  };
};
