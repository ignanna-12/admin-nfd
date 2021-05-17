import { CategoryTypes } from '../constants/categoryConstants';

export const setCategory = (category) => ({ type: CategoryTypes.SET_CATEGORY, payload: category });
