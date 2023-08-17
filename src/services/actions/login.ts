import { ChangeEvent } from "react";
import { request, getUser as getUserData } from "../../utils/api";
import { AppDispatch, AppThunk, TUser } from "../../utils/types/types";

export const GET_INPUT_VALUE: "GET_INPUT_VALUE" = "GET_INPUT_VALUE";
export const GET_LOGIN_REQUEST: "GET_LOGIN_REQUEST" = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS: "GET_LOGIN_SUCCESS" = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED: "GET_LOGIN_FAILED" = "GET_LOGIN_FAILED";
export const SET_AUTH_CHECKED: "SET_AUTH_CHECKED" = "SET_AUTH_CHECKED";
export const GET_USER: "GET_USER" = "GET_USER";
export const RESET_USER: "RESET_USER" = "RESET_USER";
export const SHOW_PASSWORD: "SHOW_PASSWORD" = "SHOW_PASSWORD";
export const GET_PREVIOUS_USER: "GET_PREVIOUS_USER" = "GET_PREVIOUS_USER";
export const GET_CHANGES_FAILED: "GET_CHANGES_FAILED" = "GET_CHANGES_FAILED";
export const GET_PROFILE_VALUE: "GET_PROFILE_VALUE" = "GET_PROFILE_VALUE";
export const SWAP_USER: "SWAP_USER" = "SWAP_USER";

export type TGetInputValue = {
  readonly type: typeof GET_INPUT_VALUE;
  readonly name: string;
  readonly value: string;
};

export type TChangeProfileValue = {
  readonly type: typeof GET_PROFILE_VALUE;
  readonly name: string;
  readonly value: string;
};

export type TGetPreviousUser = {
  readonly type: typeof SWAP_USER;
};

export type TGetUserDate = {
  readonly type: typeof GET_PREVIOUS_USER;
};

export type TShowPassword = {
  readonly type: typeof SHOW_PASSWORD;
};

export type TGetUser = {
  readonly type: typeof GET_USER;
  readonly user: TUser;
};

export type TLogin =
  | {
      readonly type: typeof GET_LOGIN_REQUEST;
    }
  | { readonly type: typeof GET_LOGIN_SUCCESS; readonly user: TUser }
  | { readonly type: typeof GET_LOGIN_FAILED; readonly error: string }
  | { readonly type: typeof SET_AUTH_CHECKED };

export type TCheckUserAuth =
  | { readonly type: typeof RESET_USER }
  | { readonly type: typeof SET_AUTH_CHECKED };

export type TLogout = {
  readonly type: typeof RESET_USER;
};

export type TChangeUser =
  | {
      readonly type: typeof GET_USER;
      readonly user: TUser;
    }
  | {
      readonly type: typeof GET_CHANGES_FAILED;
      readonly error: string;
    };

export function getInputValue(
  e: ChangeEvent<HTMLInputElement>
): TGetInputValue {
  return {
    type: GET_INPUT_VALUE,
    name: e.target.name,
    value: e.target.value,
  };
}

export function changeProfileValue(
  e: ChangeEvent<HTMLInputElement>
): TChangeProfileValue {
  return {
    type: GET_PROFILE_VALUE,
    name: e.target.name,
    value: e.target.value,
  };
}

export function getPreviousUser(): TGetPreviousUser {
  return {
    type: SWAP_USER,
  };
}

export function getUserDate(): TGetUserDate {
  return {
    type: GET_PREVIOUS_USER,
  };
}

export const showPassword = (): TShowPassword => {
  return { type: SHOW_PASSWORD };
};

export const getUser: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    return getUserData().then((res) => {
      if (res.success) {
        dispatch({
          type: GET_USER,
          user: res.user,
        });
      } else {
        return Promise.reject("Ошибка данных с сервера");
      }
    });
  };
};

export const login: AppThunk = (email: string, password: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_LOGIN_REQUEST,
    });
    request("auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((data) => {
        if (data && data.accessToken && data.refreshToken) {
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
        }
        if (data.user) {
          dispatch({
            type: GET_LOGIN_SUCCESS,
            user: data.user,
          });
        }
      })
      .catch((error: { message: string }) => {
        dispatch({
          type: GET_LOGIN_FAILED,
          error: error.message,
        });
      })
      .finally(() => {
        dispatch({
          type: SET_AUTH_CHECKED,
        });
      });
  };
};

export const checkUserAuth: AppThunk = () => {
  return async (dispatch: AppDispatch) => {
    if (localStorage.getItem("accessToken")) {
      try {
        await getUser();
      } catch {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch({ type: RESET_USER });
      } finally {
        dispatch({
          type: SET_AUTH_CHECKED,
        });
      }
    } else {
      dispatch({
        type: SET_AUTH_CHECKED,
      });
      dispatch({ type: RESET_USER });
    }
  };
};

export const logout: AppThunk = (token: string) => {
  return (dispatch: AppDispatch) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch({
      type: RESET_USER,
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
    });
  };
};

export const changeUser: AppThunk = (
  name: string,
  email: string,
  password: string
) => {
  return (dispatch: AppDispatch) => {
    const accessToken = localStorage.getItem("accessToken") || "";
    request("auth/user", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: accessToken,
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
      }),
    })
      .then((res) => {
        if (res.user) {
          dispatch({
            type: GET_USER,
            user: res.user,
          });
        }
      })
      .catch((err: { message: string }) => {
        dispatch({
          type: GET_CHANGES_FAILED,
          error: err.message,
        });
      });
  };
};

export type TLoginActions =
  | TGetInputValue
  | TChangeProfileValue
  | TGetPreviousUser
  | TGetUserDate
  | TShowPassword
  | TGetUser
  | TLogin
  | TCheckUserAuth
  | TLogout
  | TChangeUser;
