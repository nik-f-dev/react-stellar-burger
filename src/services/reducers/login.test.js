import { loginReducer, loginInitialState } from './login';
import * as types from '../actions/login';

const user = {
  name: "Vasya",
  email: "vasya@yandex.ru",
  login: 'vasya@yandex.ru'
};

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(loginInitialState);
  });

  it('should handle GET_INPUT_VALUE', () => {
    expect(loginReducer(loginInitialState,
      {
        type: types.GET_INPUT_VALUE,
        name: 'name',
        value: 'Vasya'
      }
    )).toEqual(
      {
        ...loginInitialState,
        name: 'Vasya'
      }
    );
  });

  it('should handle GET_PROFILE_VALUE', () => {
    expect(loginReducer(loginInitialState,
      {
        type: types.GET_PROFILE_VALUE,
        name: 'login',
        value: 'vasya@yandex.ru'
      }
    )).toEqual(
      {
        ...loginInitialState,
        user: {
          name: "",
          email: "",
          login: 'vasya@yandex.ru'
        },
      }
    );
  });

  it('should handle GET_LOGIN_REQUEST', () => {
    expect(loginReducer(loginInitialState,
      {
        type: types.GET_LOGIN_REQUEST,
        loginRequest: true,
      }
    )).toEqual(
      {
        ...loginInitialState,
        loginRequest: true,
      }
    );
  });

  it('should handle GET_LOGIN_SUCCESS', () => {
    expect(loginReducer(
      loginInitialState,
      {
        type: types.GET_LOGIN_SUCCESS,
        loginRequest: false,
        loginFailed: false,
        isAuthChecked: true,
        user: {...user}
      }
    )).toEqual(
      {
        ...loginInitialState,
        loginRequest: false,
        loginFailed: false,
        isAuthChecked: true,
        user: {...user}
      }
    );
  });

  it('should handle GET_LOGIN_FAILED', () => {
    expect(loginReducer(loginInitialState,
      {
        type: types.GET_LOGIN_FAILED,
        loginRequest: false,
        loginFailed: true,
      }
    )).toEqual(
      {
        ...loginInitialState,
        loginRequest: false,
        loginFailed: true,
      }
    );
  });

  it('should handle SET_AUTH_CHECKED', () => {
    expect(loginReducer(loginInitialState,
      {
        type: types.SET_AUTH_CHECKED,
        isAuthChecked: true,
      }
    )).toEqual(
      {
        ...loginInitialState,
        isAuthChecked: true,
      }
    );
  });

  it('should handle GET_USER', () => {
    expect(loginReducer(loginInitialState,
      {
        type: types.GET_USER,
        user: {...user}
      }
    )).toEqual(
      {
        ...loginInitialState,
        user: {...user}
      }
    );
  });

  it('should handle GET_PREVIOUS_USER', () => {
    expect(loginReducer(loginInitialState,
      {
        type: types.GET_PREVIOUS_USER,
        previousUser: loginInitialState.user
      }
    )).toEqual(
      {
        ...loginInitialState
      }
    );
  });

  it('should handle GET_CHANGES_FAILED', () => {
    expect(loginReducer(loginInitialState,
      {
        type: types.GET_CHANGES_FAILED,
        error: 'error',
      }
    )).toEqual(
      {
        ...loginInitialState,
        changeError: 'error',
      }
    );
  });

  it('should handle RESET_USER', () => {
    expect(loginReducer(loginInitialState,
      {
        type: types.RESET_USER,
        user: null,
      }
    )).toEqual(
      {
        ...loginInitialState,
        user: null,
      }
    );
  });

  it('should handle SHOW_PASSWORD', () => {
    expect(loginReducer(loginInitialState,
      {
        type: types.SHOW_PASSWORD,
        showPassword: !false
      }
    )).toEqual(
      {
        ...loginInitialState,
        showPassword: true
      }
    );
  });

  it('should handle SWAP_USER', () => {
    expect(loginReducer(loginInitialState,
      {
        type: types.SWAP_USER,
        user: loginInitialState.previousUser
      }
    )).toEqual(
      {
        ...loginInitialState,
      }
    );
  });
});
