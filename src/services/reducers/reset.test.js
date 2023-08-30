import { resetPasswordReducer } from './reset';
import * as types from '../actions/reset';

describe('resetPasswordReducer reducer', () => {
  it('should return the initial state', () => {
    expect(resetPasswordReducer(undefined, {})).toEqual({
      showPassword: false,
      isResetSuccess: false,
      resetRequest: false,
      resetFailed: false,
      password: "",
      code: "",
    });
  });

  it('should handle GET_FORM_VALUE', () => {
    expect(resetPasswordReducer({},
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

    expect(resetPasswordReducer({ name: 'Vasya' },
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

  it('should handle SHOW_PASSWORD', () => {
    expect(resetPasswordReducer({},
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
