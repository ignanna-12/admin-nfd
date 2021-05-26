import { OrdersTypes } from '../constants/ordersConstants';

let initialState = {
  orders: {},
  fullOrders: {},
  isLoading: false,
  isError: false,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case OrdersTypes.ORDERS_FETCH: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case OrdersTypes.SET_ORDERS: {
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
      };
    }
    case OrdersTypes.ORDERS_FAILED: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case OrdersTypes.SET_FULL_ORDERS: {
      return {
        ...state,
        fullOrders: action.payload,
      };
    }
    default:
      return state;
  }
};

export default ordersReducer;
