import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal';

const modalInitialState = {
  isOpen: false,
  modalType: null,
};

export const modalReducer = (state = modalInitialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        isOpen: true,
        modalType: action.payload,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isOpen: false,
        modalType: null,
      };
    }
    default:
      return state;
  }
};
