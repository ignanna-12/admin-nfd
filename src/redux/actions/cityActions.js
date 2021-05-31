import { CityTypes } from '../constants/cityConstants';

export const setCity = (city) => ({ type: CityTypes.SET_CITY, payload: city });
export const setCities = (cities) => ({ type: CityTypes.SET_CITIES, payload: cities });
export const citiesFailed = () => ({ type: CityTypes.CITIES_FAILED });
export const citiesFetch = () => ({ type: CityTypes.CITIES_FETCH });
