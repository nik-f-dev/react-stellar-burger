import { request } from "../../utils/api";

export const GET_FORM_VALUE = 'GET_FORM_VALUE';
export const GET_REGISTER_REQUEST = 'GET_REGISTER_REQUEST';
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS';
export const GET_REGISTER_FAILED = 'GET_REGISTER_FAILED';
export const SHOW_PASSWORD = 'SHOW_PASSWORD';

export function getForm(e) {
  return {
    type: GET_FORM_VALUE,
    inputName: e.target.name,
    value: e.target.value
  }
};

export const showPassword = () => {
  return ({ type: SHOW_PASSWORD });
}

export function register(name, email, password) {
  return (dispatch) => {
    dispatch({
      type: GET_REGISTER_REQUEST
    });
    request('auth/register', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
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
        error: error.message
      });
    });
  }
}
