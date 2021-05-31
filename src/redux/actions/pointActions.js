import { PointTypes } from '../constants/pointConstants';

export const setPoints = (points) => ({ type: PointTypes.SET_POINTS, payload: points });
export const pointsFailed = () => ({ type: PointTypes.POINTS_FAILED });
export const pointsFetch = () => ({ type: PointTypes.POINTS_FETCH });
