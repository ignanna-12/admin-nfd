import { AuthTypes } from '../constants';

export const setUserName = (name) => ({ type: AuthTypes.SET_USER_NAME, payload: name });
export const setPassword = (password) => ({ type: AuthTypes.SET_PASSWORD, payload: password });
export const setAccessToken = (token) => ({ type: AuthTypes.SET_ACCESS_TOKEN, payload: token });
export const setRefreshToken = (token) => ({ type: AuthTypes.SET_REFRESH_TOKEN, payload: token });
export const setExpiresIn = (number) => ({ type: AuthTypes.SET_EXPIRES_IN, payload: number });
export const setUserId = (id) => ({ type: AuthTypes.SET_USER_ID, payload: id });
