import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  TWsActions,
  WS_GET_ORDER_DATA,
  WS_GET_USER_ORDER_DATA,
} from "../actions/wsActionTypes";

import { TOrder } from "../../utils/types/types.js";

export type TWsState = {
  wsConnected: boolean;
  orders: null | [TOrder];
  total: null | number;
  totalToday: null | number;
  userTotal: null | number;
  userTotalToday: null | number;
  userOrders: null | [TOrder];
};

export const wsInitialState: TWsState = {
  wsConnected: false,
  orders: null,
  total: null,
  totalToday: null,
  userTotal: null,
  userTotalToday: null,
  userOrders: null,
};

export const wsReducer = (
  state = wsInitialState,
  action: TWsActions
): TWsState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };
    case WS_GET_USER_ORDER_DATA:
      return {
        ...state,
        userOrders: action.payload.orders,
        userTotal: action.payload.total,
        userTotalToday: action.payload.totalToday,
      };
    case WS_GET_ORDER_DATA:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    default:
      return state;
  }
};
