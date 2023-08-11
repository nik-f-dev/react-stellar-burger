import { request, getUser as getUserData } from "../../utils/api";

export const GET_INPUT_VALUE = 'GET_INPUT_VALUE';
export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAILED = 'GET_LOGIN_FAILED';
export const SET_AUTH_CHECKED = 'SET_AUTH_CHECKED';
export const GET_USER = 'GET_USER';
export const RESET_USER = 'RESET_USER';
export const SHOW_PASSWORD = 'SHOW_PASSWORD';
export const GET_LOGOUT_REQUEST = 'GET_LOGOUT_REQUEST';
export const GET_LOGOUT_FAILED = 'GET_LOGOUT_FAILED';
export const GET_PREVIOUS_USER = 'GET_PREVIOUS_USER';
export const GET_CHANGES_FAILED = 'GET_CHANGES_FAILED';
export const GET_PROFILE_VALUE = 'GET_PROFILE_VALUE';
export const SWAP_USER = 'SWAP_USER';

export function getInputValue(e) {
  return {
    type: GET_INPUT_VALUE,
    name: e.target.name,
    value: e.target.value
  }
};

export function changeProfileValue(e) {
  return {
    type: GET_PROFILE_VALUE,
    name: e.target.name,
    value: e.target.value
  }
};

export function getPreviousUser() {
  return {
    type: SWAP_USER
  }
}

export function getUserDate() {
  return {
    type: GET_PREVIOUS_USER
  }
}

export const showPassword = () => {
  return ({ type: SHOW_PASSWORD });
}

export function getUser() {
  return (dispatch) => {
    return getUserData()
      .then(res => {
        if (res.success) {
          dispatch({
            type: GET_USER,
            user: res.user
          });
        } else {
          return Promise.reject("Ошибка данных с сервера");
        }
      });
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch({
      type: GET_LOGIN_REQUEST
    });
    request('auth/login', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then((data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      dispatch({
        type: GET_LOGIN_SUCCESS,
        user: data.user
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_LOGIN_FAILED,
        error: error.message
      });
    })
    .finally(() => {
      dispatch({
        type: SET_AUTH_CHECKED
      });
    })
  }
}

export const checkUserAuth = () => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
        .catch((error) => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch({type: RESET_USER});
        })
        .finally(() => {
          dispatch({
            type: SET_AUTH_CHECKED
          });
        })
    } else {
      dispatch({
        type: SET_AUTH_CHECKED
      });
      dispatch({type: RESET_USER});
    }
  };
};

export const logout = (token) => {
  return (dispatch) => {
    dispatch({
      type: GET_LOGOUT_REQUEST,
    });
    request("auth/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then((res) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch({
          type: RESET_USER,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_LOGOUT_FAILED,
          error: err.message,
        });
      });
  };
};

export const changeUser = (name, email, password) => {
  return (dispatch) => {
    request("auth/user", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken")
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password
      }),
    })
      .then((res) => {
        dispatch({
          type: GET_USER,
          user: res.user
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_CHANGES_FAILED,
          error: err.message,
        });
      });
  };
};
