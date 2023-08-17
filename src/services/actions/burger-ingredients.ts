import { request } from "../../utils/api";
import { AppDispatch, AppThunk } from "../../utils/types/types";

export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST" =
  "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" =
  "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED: "GET_INGREDIENTS_FAILED" =
  "GET_INGREDIENTS_FAILED";
export const TURN_ON_HANDLE_INTERSECTION: "TURN_ON_HANDLE_INTERSECTION" =
  "TURN_ON_HANDLE_INTERSECTION";
export const TURN_OFF_HANDLE_INTERSECTION: "TURN_OFF_HANDLE_INTERSECTION" =
  "TURN_OFF_HANDLE_INTERSECTION";

export type TGetIngredients =
  | { readonly type: typeof GET_INGREDIENTS_REQUEST }
  | { readonly type: typeof GET_INGREDIENTS_SUCCESS; readonly ingredients: any }
  | { readonly type: typeof GET_INGREDIENTS_FAILED; readonly error: string };

export type TEnableIntersection = {
  readonly type: typeof TURN_ON_HANDLE_INTERSECTION;
};

export type TDisableIntersection = {
  readonly type: typeof TURN_OFF_HANDLE_INTERSECTION;
};

export const getIngredients: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    request("ingredients", {})
      .then((data) => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
          error: error.message,
        });
      });
  };
};

export function enableIntersection(): TEnableIntersection {
  return {
    type: TURN_ON_HANDLE_INTERSECTION,
  };
}

export function disableIntersection(): TDisableIntersection {
  return {
    type: TURN_OFF_HANDLE_INTERSECTION,
  };
}

export type TBurgerIngredientsActions =
  | TGetIngredients
  | TEnableIntersection
  | TDisableIntersection;
