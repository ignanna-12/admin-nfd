import { getFullOrders, getOrders, getOrderStatus } from '../../api/api';
import {
  ordersFailed,
  ordersFetch,
  setFullOrders,
  setOrders,
  setOrderStatus,
} from '../actions/ordersActions';

export const requestOrders = (page, status, city) => {
  return async (dispatch) => {
    try {
      dispatch(ordersFetch());
      let data = await getOrders(page, status, city);
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
export const requestOrderStatus = () => {
  return async (dispatch) => {
    let data = await getOrderStatus();
    let orderStatus = [];
    for (var i in data.data) {
      let elem = {};
      elem.name = data.data[i].name;
      elem.id = data.data[i].id;
      orderStatus.push(elem);
    }
    dispatch(setOrderStatus(orderStatus));
  };
};
