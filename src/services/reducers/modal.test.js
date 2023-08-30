import { modalReducer } from './modal';
import * as types from '../actions/modal';

describe('modal reducer', () => {
  it('should return the initial state', () => {
    expect(modalReducer(undefined, {})).toEqual({
      isOpen: false,
      modalType: null,
    });
  });

  it('should handle OPEN_MODAL', () => {
    expect(modalReducer({},
      {
        type: types.OPEN_MODAL,
        isOpen: true,
        payload: 'someModal'
      }
    )).toEqual(
      {
        isOpen: true,
        modalType: 'someModal'
      }
    );
  });

  it('should handle CLOSE_MODAL', () => {
    expect(modalReducer(
      {
        isOpen: true,
        modalType: 'someModal'
      },
      {
        type: types.CLOSE_MODAL,
        isOpen: false,
        modalType: null,
      }
    )).toEqual(
      {
        isOpen: false,
        modalType: null,
      }
    );
  });
});
