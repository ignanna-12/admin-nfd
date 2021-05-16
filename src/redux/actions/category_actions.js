import { CategoryTypes } from '../constants/category_constants';

export const setCategory = (category) => ({ type: CategoryTypes.SET_CATEGORY, payload: category });
