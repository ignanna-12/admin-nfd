import { OrdersTypes } from '../constants/ordersConstants';

export const setOrders = (orders) => ({ type: OrdersTypes.SET_ORDERS, payload: orders });
export const ordersFailed = () => ({ type: OrdersTypes.ORDERS_FAILED });
export const ordersFetch = () => ({ type: OrdersTypes.ORDERS_FETCH });
export const setFullOrders = (orders) => ({ type: OrdersTypes.SET_FULL_ORDERS, payload: orders });
export const setOrderStatus = (status) => ({ type: OrdersTypes.SET_ORDER_STATUS, payload: status });
