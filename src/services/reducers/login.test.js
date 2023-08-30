import { loginReducer } from './login';
import * as types from '../actions/login';

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual({
      logoutRequest: false,
      logoutError: "",
      showPassword: false,
      loginRequest: false,
      loginFailed: false,
      isAuthChecked: false,
      user: null,
      previousUser: null,
      changeError: "",
      email: "",
      password: "",
      name: "",
    });
  });

  it('should handle GET_INPUT_VALUE', () => {
    expect(loginReducer({},
      {
        type: types.GET_INPUT_VALUE,
        name: 'name',
        value: 'Vasya'
      }
    )).toEqual(
      {
        name: 'Vasya'
      }
    );
  });

  it('should handle GET_PROFILE_VALUE', () => {
    expect(loginReducer({},
      {
        type: types.GET_PROFILE_VALUE,
        name: 'login',
        value: 'vasya@yandex.ru'
      }
    )).toEqual(
      {
        user: {
          name: "",
          email: "",
          login: 'vasya@yandex.ru'
        },
      }
    );
  });

  it('should handle GET_LOGIN_REQUEST', () => {
    expect(loginReducer({},
      {
        type: types.GET_LOGIN_REQUEST,
        loginRequest: true,
      }
    )).toEqual(
      {
        loginRequest: true,
      }
    );
  });

  it('should handle GET_LOGIN_SUCCESS', () => {
    expect(loginReducer(
      {
        user: {
          name: "",
          email: "",
          login: 'petya@yandex.ru'
        }
      },
      {
        type: types.GET_LOGIN_SUCCESS,
        loginRequest: false,
        loginFailed: false,
        isAuthChecked: true,
        user: {
          name: "",
          email: "",
          login: 'vasya@yandex.ru'
        }
      }
    )).toEqual(
      {
        loginRequest: false,
        loginFailed: false,
        isAuthChecked: true,
        user: {
          name: "",
          email: "",
          login: 'vasya@yandex.ru'
        }
      }
    );
  });

  it('should handle GET_LOGIN_FAILED', () => {
    expect(loginReducer({},
      {
        type: types.GET_LOGIN_FAILED,
        loginRequest: false,
        loginFailed: true,
      }
    )).toEqual(
      {
        loginRequest: false,
        loginFailed: true,
      }
    );
  });

  it('should handle SET_AUTH_CHECKED', () => {
    expect(loginReducer({},
      {
        type: types.SET_AUTH_CHECKED,
        isAuthChecked: true,
      }
    )).toEqual(
      {
        isAuthChecked: true,
      }
    );
  });

  it('should handle GET_USER', () => {
    expect(loginReducer({},
      {
        type: types.GET_USER,
        user: {
          name: "Vasya",
          email: "vasya@yandex.ru",
          login: 'vasya@yandex.ru'
        }
      }
    )).toEqual(
      {
        user: {
          name: "Vasya",
          email: "vasya@yandex.ru",
          login: 'vasya@yandex.ru'
        }
      }
    );
  });

  it('should handle GET_PREVIOUS_USER', () => {
    const state = {
      user: {
        name: "Vasya",
        email: "vasya@yandex.ru",
        login: 'vasya@yandex.ru'
      }
    }

    expect(loginReducer(state,
      {
        type: types.GET_PREVIOUS_USER,
        previousUser: state.user
      }
    )).toEqual(
      {
        previousUser: {
          name: "Vasya",
          email: "vasya@yandex.ru",
          login: 'vasya@yandex.ru'
        }
      }
    );
  });

  it('should handle GET_CHANGES_FAILED', () => {
    expect(loginReducer({},
      {
        type: types.GET_CHANGES_FAILED,
        error: 'error',
      }
    )).toEqual(
      {
        changeError: 'error',
      }
    );
  });

  it('should handle RESET_USER', () => {
    expect(loginReducer({ user: {name: 'Vasya', email: "vasya@yandex.ru"} },
      {
        type: types.RESET_USER,
        user: null,
      }
    )).toEqual(
      {
        user: null,
      }
    );
  });

  it('should handle SHOW_PASSWORD', () => {
    expect(loginReducer({},
      {
        type: types.SHOW_PASSWORD,
        showPassword: !false
      }
    )).toEqual(
      {
        showPassword: true
      }
    );
  });

  it('should handle SWAP_USER', () => {
    const state = {
      previousUser: {
        name: "Vasya",
        email: "vasya@yandex.ru",
        login: 'vasya@yandex.ru'
      },
      user: {
        name: "Nikita",
        email: "nikita@yandex.ru",
        login: 'nikita@yandex.ru'
      }
    }

    expect(loginReducer(state,
      {
        type: types.SWAP_USER,
        user: state.previousUser
      }
    )).toEqual(
      {
        previousUser: {
          name: "Vasya",
          email: "vasya@yandex.ru",
          login: 'vasya@yandex.ru'
        },
        user: {
          name: "Vasya",
          email: "vasya@yandex.ru",
          login: 'vasya@yandex.ru'
        }
      }
    );
  });
});
