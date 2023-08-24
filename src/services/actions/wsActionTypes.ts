import { TOrder } from "../../utils/types/types";

export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" =
  "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" =
  "WS_CONNECTION_CLOSED";
export const WS_GET_DATA: "WS_GET_DATA" = "WS_GET_DATA";
export const WS_CLEAR_ORDERS: "WS_CLEAR_ORDERS" = "WS_CLEAR_ORDERS";

export type TWsConnectionStart = {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string | null;
};

export type TWsClearOrders = {
  readonly type: typeof WS_CLEAR_ORDERS;
};

export type TWsConnectionSuccess = {
  readonly type: typeof WS_CONNECTION_SUCCESS;
};

export type TWsConnectionError = {
  readonly type: typeof WS_CONNECTION_ERROR;
};

export type TWsConnectionClosed = {
  readonly type: typeof WS_CONNECTION_CLOSED;
};

export type TWsGetData = {
  readonly type: typeof WS_GET_DATA;
  readonly orders: [TOrder];
  readonly total: number;
  readonly totalToday: number;
};

export const wsConnectionSuccess = (): TWsConnectionSuccess => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = (): TWsConnectionError => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = (): TWsConnectionClosed => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const clearOrders = (): TWsClearOrders => {
  return {
    type: WS_CLEAR_ORDERS,
  };
};

export type TWsActions =
  | TWsConnectionStart
  | TWsConnectionSuccess
  | TWsConnectionError
  | TWsConnectionClosed
  | TWsGetData
  | TWsClearOrders;
