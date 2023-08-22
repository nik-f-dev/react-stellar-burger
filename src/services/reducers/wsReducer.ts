import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_DATA,
  TWsActions,
} from "../actions/wsActionTypes";

import { TOrder } from "../../utils/types/types.js";

export type TWsState = {
  wsConnected: boolean;
  orders: null | [TOrder];
  total: null | number;
  totalToday: null | number;
};

const wsInitialState: TWsState = {
  wsConnected: false,
  orders: null,
  total: null,
  totalToday: null,
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

    case WS_GET_DATA:
      return {
        ...state,
        orders: [...action.orders],
        total: action.total,
        totalToday: action.totalToday,
      };
    default:
      return state;
  }
};
