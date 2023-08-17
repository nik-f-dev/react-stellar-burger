import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  CLEAR_ORDER_NUMBER,
  TOrderDetailsActions,
} from "../actions/order-details";

type TOrderDetailsState = {
  orderNumber: null | string;
  orderRequest: boolean;
  orderFailed: boolean;
  error: string | { error: string };
};

const orderDetailsInitialState: TOrderDetailsState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false,
  error: "",
};

export const orderDetailsReducer = (
  state = orderDetailsInitialState,
  action: TOrderDetailsActions
): TOrderDetailsState => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        orderNumber: action.order,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
        error: action.error,
      };
    }
    case CLEAR_ORDER_NUMBER: {
      return {
        ...state,
        orderNumber: null,
      };
    }
    default: {
      return state;
    }
  }
};
