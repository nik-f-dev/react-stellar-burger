import { ChangeEvent } from "react";
import { request } from "../../utils/api";
import { AppDispatch, AppThunk } from "../../utils/types/types";

export const GET_FORM_VALUE: "GET_FORM_VALUE" = "GET_FORM_VALUE";
export const GET_RESET_REQUEST: "GET_RESET_REQUEST" = "GET_RESET_REQUEST";
export const GET_RESET_SUCCESS: "GET_RESET_SUCCESS" = "GET_RESET_SUCCESS";
export const GET_RESET_FAILED: "GET_RESET_FAILED" = "GET_RESET_FAILED";
export const SHOW_PASSWORD: "SHOW_PASSWORD" = "SHOW_PASSWORD";

export type TGetInput = {
  readonly type: typeof GET_FORM_VALUE;
  readonly inputName: string;
  readonly value: string;
};

export type TGetNewPassword =
  | { readonly type: typeof GET_RESET_REQUEST }
  | { readonly type: typeof GET_RESET_SUCCESS }
  | { readonly type: typeof GET_RESET_FAILED; readonly error: string };

export type TShowPassword = {
  readonly type: typeof SHOW_PASSWORD;
};

export function getInput(e: ChangeEvent<HTMLInputElement>): TGetInput {
  return {
    type: GET_FORM_VALUE,
    inputName: e.target.name,
    value: e.target.value,
  };
}

export const getNewPassword: AppThunk = (password: string, token: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_RESET_REQUEST,
    });
    request("password-reset/reset", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    })
      .then((res) => {
        dispatch({
          type: GET_RESET_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_RESET_FAILED,
          error: err.message,
        });
      });
  };
};

export const showPassword = () => {
  return { type: SHOW_PASSWORD };
};

export type TResetActions = TGetInput | TShowPassword | TGetNewPassword;
