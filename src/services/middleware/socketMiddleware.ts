import type { Middleware, MiddlewareAPI } from "redux";
import {
  AppDispatch,
  RootState,
  TApplicationActions,
} from "../../utils/types/types";
import { TWsShortActions } from "../actions/wsActionTypes";

export const socketMiddleware = (
  wsUrl: string,
  wsActions: TWsShortActions
): Middleware => {
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
        const { payload } = action;
        let accessTokenWithBearer = localStorage.getItem("accessToken");
        let accessToken =
          accessTokenWithBearer && accessTokenWithBearer.split(" ")[1];
        socket = new WebSocket(
          payload === "withToken" ? `${wsUrl}?token=${accessToken}` : wsUrl
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
          dispatch({
            type: onMessage,
            payload: parsedData,
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
