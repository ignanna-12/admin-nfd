import { getCategory } from '../../api/api';
import { setCategory } from '../actions/categoryActions';

export const requestCategory = () => {
  return async (dispatch) => {
    let data = await getCategory();
    let category = [];
    for (var i in data.data) {
      let elem = {};
      elem.name = data.data[i].name;
      elem.id = data.data[i].id;
      category.push(elem);
    }
    dispatch(setCategory(category));
  };
};
