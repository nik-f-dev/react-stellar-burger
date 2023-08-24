import { wsOrderTapeUrl, wsUserOrderUrl } from "../../utils/api";
import type { Middleware, MiddlewareAPI } from "redux";
import {
  AppDispatch,
  RootState,
  TApplicationActions,
} from "../../utils/types/types";

type TWsShortActions = {
  wsInit: "WS_CONNECTION_START";
  onOpen: "WS_CONNECTION_SUCCESS";
  onClose: "WS_CONNECTION_CLOSED";
  onError: "WS_CONNECTION_ERROR";
  onMessage: "WS_GET_DATA";
};

export const socketMiddleware = (wsActions: TWsShortActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TApplicationActions) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;

      if (type === onClose && socket) {
        socket.close();
        socket = null;
      }

      if (type === wsInit && !socket) {
        let accessTokenWithBearer = localStorage.getItem("accessToken");
        let accessToken =
          accessTokenWithBearer && accessTokenWithBearer.split(" ")[1];
        const { payload } = action;
        socket = new WebSocket(
          payload === "userOrder"
            ? `${wsUserOrderUrl}?token=${accessToken}`
            : wsOrderTapeUrl
        );
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { orders, total, totalToday } = parsedData;
          dispatch({
            type: onMessage,
            orders: orders,
            total: total,
            totalToday: totalToday,
          });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
      }
      next(action);
    };
  }) as Middleware;
};
