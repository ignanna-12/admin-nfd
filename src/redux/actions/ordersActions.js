import { OrdersTypes } from '../constants/ordersConstants';

export const setOrders = (orders) => ({ type: OrdersTypes.SET_ORDERS, payload: orders });
export const ordersFailed = () => ({ type: OrdersTypes.ORDERS_FAILED });
export const ordersFetch = () => ({ type: OrdersTypes.ORDERS_FETCH });
