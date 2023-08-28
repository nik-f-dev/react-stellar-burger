export const OPEN_MODAL: "OPEN_MODAL" = "OPEN_MODAL";
export const CLOSE_MODAL: "CLOSE_MODAL" = "CLOSE_MODAL";

export type TOpenModal = {
  readonly type: typeof OPEN_MODAL;
  readonly payload: string;
};

export type TCloseModal = {
  readonly type: typeof CLOSE_MODAL;
};

export const openModal = (modalType: string): TOpenModal => {
  return {
    type: OPEN_MODAL,
    payload: modalType,
  };
};

export const closeModal = (): TCloseModal => {
  return {
    type: CLOSE_MODAL,
  };
};

export type TModalActions = TOpenModal | TCloseModal;
