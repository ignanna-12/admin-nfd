import { getOrders } from '../../api/api';
import { ordersFailed, ordersFetch, setOrders } from '../actions/ordersActions';

export const requestOrders = () => {
  return async (dispatch) => {
    try {
      dispatch(ordersFetch());
      let data = await getOrders();
      dispatch(setOrders(data));
    } catch (error) {
      dispatch(ordersFailed());
    }
  };
};
