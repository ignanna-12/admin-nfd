import { getPoints } from '../../api/api';
import { pointsFailed, pointsFetch, setPoints } from '../actions/pointActions';

export const requestPoints = (page, city) => {
  return async (dispatch) => {
    try {
      dispatch(pointsFetch());
      let data = await getPoints(page, city);
      dispatch(setPoints(data));
    } catch (error) {
      dispatch(pointsFailed());
    }
  };
};
