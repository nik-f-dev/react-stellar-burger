import { request } from "../../utils/api";
import { AppDispatch, AppThunk } from "../../utils/types/types";

export const GET_ORDER_REQUEST: "GET_ORDER_REQUEST" = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS" = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED: "GET_ORDER_FAILED" = "GET_ORDER_FAILED";
export const CLEAR_ORDER_NUMBER: "CLEAR_ORDER_NUMBER" = "CLEAR_ORDER_NUMBER";

export type TClearOrderNumber = {
  readonly type: typeof CLEAR_ORDER_NUMBER;
};

export type TGetOrder =
  | { readonly type: typeof GET_ORDER_REQUEST }
  | {
      readonly type: typeof GET_ORDER_SUCCESS;
      readonly order: string;
    }
  | { readonly type: typeof GET_ORDER_FAILED; readonly error: string };

export function clearOrderNumber(): TClearOrderNumber {
  return {
    type: CLEAR_ORDER_NUMBER,
  };
}

export const getOrder: AppThunk = (ingredientsId) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    request("orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: ingredientsId }),
    })
      .then((data) => {
        if (data && data.order) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            order: data.order.number,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ORDER_FAILED,
          error: error.message,
        });
      });
  };
};

export type TOrderDetailsActions = TClearOrderNumber | TGetOrder;
