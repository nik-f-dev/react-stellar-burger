import { ChangeEvent } from "react";
import { request } from "../../utils/api";
import { AppDispatch } from "../../utils/types/types";

export const GET_INPUT_VALUE = "GET_FORM_VALUE";
export const GET_FORGOT_REQUEST = "GET_FORGOT_REQUEST";
export const GET_FORGOT_SUCCESS = "GET_FORGOT_SUCCESS";
export const GET_FORGOT_FAILED = "GET_FORGOT_FAILED";

export type TGetInput = {
  readonly type: typeof GET_INPUT_VALUE;
  readonly inputName: string;
  readonly value: string;
};

export type TGetSucessChange =
  | { readonly type: typeof GET_FORGOT_REQUEST }
  | { readonly type: typeof GET_FORGOT_SUCCESS }
  | { readonly type: typeof GET_FORGOT_FAILED; readonly error: string };

export function getInput(e: ChangeEvent<HTMLInputElement>): TGetInput {
  return {
    type: GET_INPUT_VALUE,
    inputName: e.target.name,
    value: e.target.value,
  };
}

export const getSucessChange = (email: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_FORGOT_REQUEST,
    });
    request("password-reset", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => {
        dispatch({
          type: GET_FORGOT_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_FORGOT_FAILED,
          error: err.message,
        });
      });
  };
};

export type TForgotActions = TGetInput | TGetSucessChange;
