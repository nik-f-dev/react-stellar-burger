import { resetPasswordReducer, resetPasswordInitialState } from './reset';
import * as types from '../actions/reset';

describe('resetPasswordReducer reducer', () => {
  it('should return the initial state', () => {
    expect(resetPasswordReducer(undefined, {})).toEqual(resetPasswordInitialState);
  });

  it('should handle GET_FORM_VALUE', () => {
    expect(resetPasswordReducer(resetPasswordInitialState,
      {
        type: types.GET_FORM_VALUE,
        inputName: 'name',
        value: 'Vasya'
      }
    )).toEqual(
      {
        ...resetPasswordInitialState,
        name: 'Vasya'
      }
    );

    expect(resetPasswordReducer(resetPasswordInitialState,
      {
        type: types.GET_FORM_VALUE,
        inputName: 'password',
        value: '0000'
      }
    )).toEqual(
      {
        ...resetPasswordInitialState,
        password: '0000'
      }
    );
  });

  it('should handle SHOW_PASSWORD', () => {
    expect(resetPasswordReducer(resetPasswordInitialState,
      {
        type: types.SHOW_PASSWORD,
        showPassword: false
      }
    )).toEqual(
      {
        ...resetPasswordInitialState,
        showPassword: true
      }
    );
  });
});
