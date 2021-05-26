import { getFullOrders, getOrders } from '../../api/api';
import { ordersFailed, ordersFetch, setFullOrders, setOrders } from '../actions/ordersActions';

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

export const requestFullOrders = () => {
  return async (dispatch) => {
    try {
      let data = await getFullOrders();
      dispatch(setFullOrders(data));
    } catch (error) {
      console.log(error);
    }
  };
};
