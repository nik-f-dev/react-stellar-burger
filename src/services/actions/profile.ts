import { ChangeEvent } from "react";
import { getUser as getUserData } from "../../utils/api";
import { AppDispatch, AppThunk, TUser } from "../../utils/types/types";

export const GET_INPUT_VALUE: "GET_INPUT_VALUE" = "GET_INPUT_VALUE";
export const GET_PROFILE_REQUEST: "GET_PROFILE_REQUEST" = "GET_PROFILE_REQUEST";
export const GET_PROFILE_FAILED: "GET_PROFILE_FAILED" = "GET_PROFILE_FAILED";
export const GET_USER: "GET_USER" = "GET_USER";

export type TGetInputValue = {
  readonly type: typeof GET_INPUT_VALUE;
  readonly name: string;
  readonly value: string;
};

export type TGetNewPassword =
  | { readonly type: typeof GET_PROFILE_REQUEST }
  | { readonly type: typeof GET_USER; user: TUser }
  | { readonly type: typeof GET_PROFILE_FAILED; readonly err: string };

export function getInputValue(
  e: ChangeEvent<HTMLInputElement>
): TGetInputValue {
  return {
    type: GET_INPUT_VALUE,
    name: e.target.name,
    value: e.target.value,
  };
}

export const getUser: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_PROFILE_REQUEST,
    });
    getUserData()
      .then((res) => {
        if (res.success) {
          dispatch({
            type: GET_USER,
            user: res.user,
          });
        } else {
          return Promise.reject("Ошибка данных с сервера");
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_PROFILE_FAILED,
          err: err.message,
        });
      });
  };
};

export type TProfileActions = TGetInputValue | TGetNewPassword;
