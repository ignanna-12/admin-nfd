import { getCities } from '../../api/api';
import { setCity, setCities, citiesFailed, citiesFetch } from '../actions/cityActions';

export const requestCity = () => {
  return async (dispatch) => {
    let data = await getCities();
    let city = [];
    for (var i in data.data) {
      let elem = {};
      elem.name = data.data[i].name;
      elem.id = data.data[i].id;
      city.push(elem);
    }
    dispatch(setCity(city));
  };
};
export const requestCities = () => {
  return async (dispatch) => {
    try {
      dispatch(citiesFetch());
      let data = await getCities();
      dispatch(setCities(data));
    } catch (error) {
      dispatch(citiesFailed());
    }
  };
};
