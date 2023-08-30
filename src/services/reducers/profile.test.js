import { profileReducer } from './profile';
import * as types from '../actions/profile';

describe('profile reducer', () => {
  it('should return the initial state', () => {
    expect(profileReducer(undefined, {})).toEqual({
      profileRequest: false,
      profileFailed: false,
      user: null,
      name: "",
      login: "",
      password: "",
      error: "",
    });
  });

  it('should handle GET_INPUT_VALUE', () => {
    expect(profileReducer({},
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

    expect(profileReducer({ name: 'Vasya' },
      {
        type: types.GET_INPUT_VALUE,
        name: 'password',
        value: '0000'
      }
    )).toEqual(
      {
        name: 'Vasya',
        password: '0000'
      }
    );
  });

  it('should handle GET_USER', () => {
    expect(profileReducer({},
      {
        type: types.GET_USER,
        user: {name: 'Vasya', id: 'sf213ds'},
        profileRequest: false,
      }
    )).toEqual(
      {
        user: {name: 'Vasya', id: 'sf213ds'},
        profileRequest: false,
      }
    );
  });

  it('should handle GET_PROFILE_REQUEST', () => {
    expect(profileReducer({},
      {
        type: types.GET_PROFILE_REQUEST,
        profileRequest: true,
      }
    )).toEqual(
      {
        profileRequest: true,
      }
    );
  });

  it('should handle GET_PROFILE_FAILED', () => {
    expect(profileReducer({},
      {
        type: types.GET_PROFILE_FAILED,
        err: 'error'
      }
    )).toEqual(
      {
        error: 'error'
      }
    );
  });
});
