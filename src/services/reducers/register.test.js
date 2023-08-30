import { registerReducer } from './register';
import * as types from '../actions/register';

describe('register reducer', () => {
  it('should return the initial state', () => {
    expect(registerReducer(undefined, {})).toEqual({
      showPassword: false,
      registerRequest: false,
      registerFailed: false,
      error: "",
      name: "",
      email: "",
      password: "",
    });
  });

  it('should handle GET_FORM_VALUE', () => {
    expect(registerReducer({},
      {
        type: types.GET_FORM_VALUE,
        inputName: 'name',
        value: 'Vasya'
      }
    )).toEqual(
      {
        name: 'Vasya'
      }
    );

    expect(registerReducer({ name: 'Vasya' },
      {
        type: types.GET_FORM_VALUE,
        inputName: 'password',
        value: '0000'
      }
    )).toEqual(
      {
        name: 'Vasya',
        password: '0000'
      }
    );
  });

  it('should handle GET_REGISTER_REQUEST', () => {
    expect(registerReducer({},
      {
        type: types.GET_REGISTER_REQUEST,
        registerRequest: true
      }
    )).toEqual(
      {
        registerRequest: true
      }
    );
  });

  it('should handle GET_REGISTER_SUCCESS', () => {
    expect(registerReducer({},
      {
        type: types.GET_REGISTER_SUCCESS,
        registerRequest: false,
        registerFailed: false,
      }
    )).toEqual(
      {
        registerRequest: false,
        registerFailed: false,
      }
    );
  });

  it('should handle GET_REGISTER_FAILED', () => {
    expect(registerReducer({},
      {
        type: types.GET_REGISTER_FAILED,
        registerRequest: false,
        registerFailed: true,
        error: 'error'
      }
    )).toEqual(
      {
        registerRequest: false,
        registerFailed: true,
        error: 'error'
      }
    );
  });

  it('should handle SHOW_PASSWORD', () => {
    expect(registerReducer({},
      {
        type: types.SHOW_PASSWORD,
        showPassword: false
      }
    )).toEqual(
      {
        showPassword: true
      }
    );
  });
});
