import { request } from "../../utils/api";

export const GET_INPUT_VALUE = "GET_FORM_VALUE";
export const GET_FORGOT_REQUEST = "GET_FORGOT_REQUEST";
export const GET_FORGOT_SUCCESS = "GET_FORGOT_SUCCESS";
export const GET_FORGOT_FAILED = "GET_FORGOT_FAILED";

export function getInput(e) {
  return {
    type: GET_INPUT_VALUE,
    inputName: e.target.name,
    value: e.target.value,
  };
}

export const getSucessChange = (email) => {
  return (dispatch) => {
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
