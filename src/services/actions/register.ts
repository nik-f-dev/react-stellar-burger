import { request } from "../../utils/api";
import { AppDispatch, AppThunk } from "../../utils/types/types";
import { ChangeEvent } from "react";

export const GET_FORM_VALUE: "GET_FORM_VALUE" = "GET_FORM_VALUE";
export const GET_REGISTER_REQUEST: "GET_REGISTER_REQUEST" =
  "GET_REGISTER_REQUEST";
export const GET_REGISTER_SUCCESS: "GET_REGISTER_SUCCESS" =
  "GET_REGISTER_SUCCESS";
export const GET_REGISTER_FAILED: "GET_REGISTER_FAILED" = "GET_REGISTER_FAILED";
export const SHOW_PASSWORD: "SHOW_PASSWORD" = "SHOW_PASSWORD";

export type TRegister =
  | { readonly type: typeof GET_REGISTER_REQUEST }
  | { readonly type: typeof GET_REGISTER_SUCCESS }
  | { readonly type: typeof GET_REGISTER_FAILED; readonly error: string };

export type TGetForm = {
  readonly type: typeof GET_FORM_VALUE;
  readonly inputName: string;
  readonly value: string;
};

export type TShowPassword = {
  readonly type: typeof SHOW_PASSWORD;
};

export function getForm(e: ChangeEvent<HTMLInputElement>): TGetForm {
  return {
    type: GET_FORM_VALUE,
    inputName: e.target.name,
    value: e.target.value,
  };
}

export const showPassword = (): TShowPassword => {
  return { type: SHOW_PASSWORD };
};

export const register: AppThunk = (
  name: string,
  email: string,
  password: string
) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_REGISTER_REQUEST,
    });
    request("auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then(() => {
        dispatch({
          type: GET_REGISTER_SUCCESS,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_REGISTER_FAILED,
          error: error.message,
        });
      });
  };
};

export type TRegisterActions = TRegister | TGetForm | TShowPassword;
