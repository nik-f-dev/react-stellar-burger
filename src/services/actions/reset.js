import { request } from "../../utils/api";

export const GET_INPUT_VALUE = "GET_FORM_VALUE";
export const GET_RESET_REQUEST = "GET_RESET_REQUEST";
export const GET_RESET_SUCCESS = "GET_RESET_SUCCESS";
export const GET_RESET_FAILED = "GET_RESET_FAILED";
export const SHOW_PASSWORD = "SHOW_PASSWORD";

export function getInput(e) {
  return {
    type: GET_INPUT_VALUE,
    inputName: e.target.name,
    value: e.target.value,
  };
}

export const getNewPassword = (password, token) => {
  return (dispatch) => {
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
