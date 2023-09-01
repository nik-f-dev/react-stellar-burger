import { profileReducer, profileInitialState } from './profile';
import * as types from '../actions/profile';

const user = {
  name: 'Vasya',
  id: 'sf213ds'
}

describe('profile reducer', () => {
  it('should return the initial state', () => {
    expect(profileReducer(undefined, {})).toEqual(profileInitialState);
  });

  it('should handle GET_INPUT_VALUE', () => {
    expect(profileReducer(profileInitialState,
      {
        type: types.GET_INPUT_VALUE,
        name: 'name',
        value: 'Vasya'
      }
    )).toEqual(
      {
        ...profileInitialState,
        name: 'Vasya'
      }
    );

    expect(profileReducer(profileInitialState,
      {
        type: types.GET_INPUT_VALUE,
        name: 'password',
        value: '0000'
      }
    )).toEqual(
      {
        ...profileInitialState,
        password: '0000'
      }
    );
  });

  it('should handle GET_USER', () => {
    expect(profileReducer(profileInitialState,
      {
        type: types.GET_USER,
        user: {...user},
        profileRequest: false,
      }
    )).toEqual(
      {
        ...profileInitialState,
        user: {...user},
        profileRequest: false,
      }
    );
  });

  it('should handle GET_PROFILE_REQUEST', () => {
    expect(profileReducer(profileInitialState,
      {
        type: types.GET_PROFILE_REQUEST,
        profileRequest: true,
      }
    )).toEqual(
      {
        ...profileInitialState,
        profileRequest: true,
      }
    );
  });

  it('should handle GET_PROFILE_FAILED', () => {
    expect(profileReducer(profileInitialState,
      {
        type: types.GET_PROFILE_FAILED,
        err: 'error'
      }
    )).toEqual(
      {
        ...profileInitialState,
        error: 'error'
      }
    );
  });
});
