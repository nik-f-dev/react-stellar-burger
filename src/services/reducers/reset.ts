import { GET_FORM_VALUE, SHOW_PASSWORD, TResetActions } from "../actions/reset";

type TResetPasswordState = {
  showPassword: boolean;
  isResetSuccess: boolean;
  resetRequest: boolean;
  resetFailed: boolean;
  password: string;
  code: string;
};

const resetPasswordInitialState: TResetPasswordState = {
  showPassword: false,
  isResetSuccess: false,
  resetRequest: false,
  resetFailed: false,
  password: "",
  code: "",
};

export const resetPasswordReducer = (
  state = resetPasswordInitialState,
  action: TResetActions
): TResetPasswordState => {
  switch (action.type) {
    case GET_FORM_VALUE: {
      const { inputName, value } = action;
      return {
        ...state,
        [inputName]: value,
      };
    }
    case SHOW_PASSWORD: {
      return {
        ...state,
        showPassword: !state.showPassword,
      };
    }
    default: {
      return state;
    }
  }
};
