import { forgotPasswordReducer, forgotPasswordInitialState } from './forgot';
import * as types from '../actions/forgot';

describe('forgot password reducer', () => {
  it('should return the initial state', () => {
    expect(forgotPasswordReducer(undefined, {})).toEqual(forgotPasswordInitialState);
  });

  it('should handle GET_INPUT_VALUE', () => {
    expect(forgotPasswordReducer(forgotPasswordInitialState,
      {
        type: types.GET_INPUT_VALUE,
        inputName: 'password',
        value: '0000'
      }
    )).toEqual(
      {
        ...forgotPasswordInitialState,
        password: '0000'
      }
    );
  });

  it('should handle GET_FORGOT_REQUEST', () => {
    expect(forgotPasswordReducer(forgotPasswordInitialState,
      {
        type: types.GET_FORGOT_REQUEST,
        forgotRequest: true
      }
    )).toEqual(
      {
        ...forgotPasswordInitialState,
        forgotRequest: true
      }
    );
  });

  it('should handle GET_FORGOT_SUCCESS', () => {
    expect(forgotPasswordReducer(forgotPasswordInitialState,
      {
        type: types.GET_FORGOT_SUCCESS,
        forgotRequest: false,
        forgotFailed: false,
        isForgotSuccess: true,
      }
    )).toEqual(
      {
        ...forgotPasswordInitialState,
        forgotRequest: false,
        forgotFailed: false,
        isForgotSuccess: true,
      }
    );
  });

  it('should handle GET_FORGOT_FAILED', () => {
    expect(forgotPasswordReducer(forgotPasswordInitialState,
      {
        type: types.GET_FORGOT_FAILED,
        forgotRequest: false,
        forgotFailed: true,
        error: 'error',
      }
    )).toEqual(
      {
        ...forgotPasswordInitialState,
        forgotRequest: false,
        forgotFailed: true,
        error: 'error',
      }
    );
  });
});
