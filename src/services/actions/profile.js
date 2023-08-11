import { request, getUser as getUserData } from "../../utils/api";

export const GET_INPUT_VALUE = 'GET_INPUT_VALUE';
export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_FAILED = 'GET_PROFILE_FAILED';
export const GET_USER = 'GET_USER';
export const CHANGE_USER = 'CHANGE_USER';

export function getInputValue(e) {
  return {
    type: GET_INPUT_VALUE,
    name: e.target.name,
    value: e.target.value
  }
};

export function getUser() {
  return (dispatch) => {
    dispatch({
      type: GET_PROFILE_REQUEST
    });
    getUserData()
    .then(res => {
      if (res.success) {
        dispatch({
          type: GET_USER,
          user: res.user
        });
      } else {
        return Promise.reject("Ошибка данных с сервера");
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_PROFILE_FAILED,
        err: err.message
      })
    })
  };
}

