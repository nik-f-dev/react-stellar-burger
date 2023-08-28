import { OPEN_MODAL, CLOSE_MODAL, TModalActions } from "../actions/modal";

type TModalState = {
  isOpen: boolean;
  modalType: null | string;
};

const modalInitialState: TModalState = {
  isOpen: false,
  modalType: null,
};

export const modalReducer = (
  state = modalInitialState,
  action: TModalActions
): TModalState => {
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
