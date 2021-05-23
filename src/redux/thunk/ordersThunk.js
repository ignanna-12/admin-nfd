import { getOrders } from '../../api/api';
import { ordersFailed, ordersFetch, setOrders } from '../actions/ordersActions';

export const requestOrders = (page) => {
  return async (dispatch) => {
    try {
      dispatch(ordersFetch());
      let data = await getOrders(page);
      dispatch(setOrders(data));
    } catch (error) {
      dispatch(ordersFailed());
    }
  };
};
