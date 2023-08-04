import { request } from "../../utils/api";

export const GET_INPUT_VALUE = "GET_FORM_VALUE";
export const GET_RESET_REQUEST = "GET_REGISTER_REQUEST";
export const GET_RESET_SUCCESS = "GET_REGISTER_SUCCESS";
export const GET_RESET_FAILED = "GET_REGISTER_FAILED";
export const SHOW_PASSWORD = "SHOW_PASSWORD";

export function getInput(e) {
  return {
    type: GET_INPUT_VALUE,
    inputName: e.target.name,
    value: e.target.value,
  };
}

export const showPassword = () => {
  return { type: SHOW_PASSWORD };
};
