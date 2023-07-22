import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED } from "../actions/order-details";

const orderDetailsInitialState = {
  orderNumber: '',
  orderRequest: false,
  orderFailed: false,
  error: ''
}

export const orderDetailsReducer = (state = orderDetailsInitialState, action) => {
  switch(action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      }
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        orderNumber: action.order
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}
