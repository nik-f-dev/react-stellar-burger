import { modalReducer, modalInitialState } from './modal';
import * as types from '../actions/modal';

describe('modal reducer', () => {
  it('should return the initial state', () => {
    expect(modalReducer(undefined, {})).toEqual(modalInitialState);
  });

  it('should handle OPEN_MODAL', () => {
    expect(modalReducer(modalInitialState,
      {
        type: types.OPEN_MODAL,
        isOpen: true,
        payload: 'someModal'
      }
    )).toEqual(
      {
        ...modalInitialState,
        isOpen: true,
        modalType: 'someModal'
      }
    );
  });

  it('should handle CLOSE_MODAL', () => {
    expect(modalReducer(
      modalInitialState,
      {
        type: types.CLOSE_MODAL,
        isOpen: false,
        modalType: null,
      }
    )).toEqual(
      {
        ...modalInitialState,
        isOpen: false,
        modalType: null,
      }
    );
  });
});
