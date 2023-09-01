import { registerReducer, registerInitialState } from './register';
import * as types from '../actions/register';

describe('register reducer', () => {
  it('should return the initial state', () => {
    expect(registerReducer(undefined, {})).toEqual(registerInitialState);
  });

  it('should handle GET_FORM_VALUE', () => {
    expect(registerReducer(registerInitialState,
      {
        type: types.GET_FORM_VALUE,
        inputName: 'name',
        value: 'Vasya'
      }
    )).toEqual(
      {
        ...registerInitialState,
        name: 'Vasya'
      }
    );

    expect(registerReducer(registerInitialState,
      {
        type: types.GET_FORM_VALUE,
        inputName: 'password',
        value: '0000'
      }
    )).toEqual(
      {
        ...registerInitialState,
        password: '0000'
      }
    );
  });

  it('should handle GET_REGISTER_REQUEST', () => {
    expect(registerReducer(registerInitialState,
      {
        type: types.GET_REGISTER_REQUEST,
        registerRequest: true
      }
    )).toEqual(
      {
        ...registerInitialState,
        registerRequest: true
      }
    );
  });

  it('should handle GET_REGISTER_SUCCESS', () => {
    expect(registerReducer(registerInitialState,
      {
        type: types.GET_REGISTER_SUCCESS,
        registerRequest: false,
        registerFailed: false,
      }
    )).toEqual(
      {
        ...registerInitialState,
        registerRequest: false,
        registerFailed: false,
      }
    );
  });

  it('should handle GET_REGISTER_FAILED', () => {
    expect(registerReducer(registerInitialState,
      {
        type: types.GET_REGISTER_FAILED,
        registerRequest: false,
        registerFailed: true,
        error: 'error'
      }
    )).toEqual(
      {
        ...registerInitialState,
        registerRequest: false,
        registerFailed: true,
        error: 'error'
      }
    );
  });

  it('should handle SHOW_PASSWORD', () => {
    expect(registerReducer(registerInitialState,
      {
        type: types.SHOW_PASSWORD,
        showPassword: false
      }
    )).toEqual(
      {
        ...registerInitialState,
        showPassword: true
      }
    );
  });
});
