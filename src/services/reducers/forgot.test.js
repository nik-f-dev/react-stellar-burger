import { forgotPasswordReducer } from './forgot';
import * as types from '../actions/forgot';

describe('forgot password reducer', () => {
  it('should return the initial state', () => {
    expect(forgotPasswordReducer(undefined, {})).toEqual({
      isForgotSuccess: false,
      forgotRequest: false,
      forgotFailed: false,
      email: "",
      error: "",
    });
  });

  it('should handle GET_INPUT_VALUE', () => {
    expect(forgotPasswordReducer({},
      {
        type: types.GET_INPUT_VALUE,
        inputName: 'password',
        value: '0000'
      }
    )).toEqual(
      {
        password: '0000'
      }
    );
  });

  it('should handle GET_FORGOT_REQUEST', () => {
    expect(forgotPasswordReducer({},
      {
        type: types.GET_FORGOT_REQUEST,
        forgotRequest: true
      }
    )).toEqual(
      {
        forgotRequest: true
      }
    );
  });

  it('should handle GET_FORGOT_SUCCESS', () => {
    expect(forgotPasswordReducer({},
      {
        type: types.GET_FORGOT_SUCCESS,
        forgotRequest: false,
        forgotFailed: false,
        isForgotSuccess: true,
      }
    )).toEqual(
      {
        forgotRequest: false,
        forgotFailed: false,
        isForgotSuccess: true,
      }
    );
  });

  it('should handle GET_FORGOT_FAILED', () => {
    expect(forgotPasswordReducer({},
      {
        type: types.GET_FORGOT_FAILED,
        forgotRequest: false,
        forgotFailed: true,
        error: 'error',
      }
    )).toEqual(
      {
        forgotRequest: false,
        forgotFailed: true,
        error: 'error',
      }
    );
  });
});
