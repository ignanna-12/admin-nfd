import { AuthTypes } from '../constants';

export const authFetch = () => ({ type: AuthTypes.AUTH_FETCH });
export const authSuccess = (id) => ({ type: AuthTypes.AUTH_SUCCESS, payload: id });
export const authFailed = () => ({ type: AuthTypes.AUTH_FAILED });
export const regSuccess = (id) => ({ type: AuthTypes.REG_SUCCESS, payload: id });
