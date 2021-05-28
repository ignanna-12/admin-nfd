import { CityTypes } from '../constants/cityConstants';

export const setCity = (city) => ({ type: CityTypes.SET_CITY, payload: city });
