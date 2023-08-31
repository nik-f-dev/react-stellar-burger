import {
  GET_INPUT_VALUE,
  GET_FORGOT_REQUEST,
  GET_FORGOT_SUCCESS,
  GET_FORGOT_FAILED,
  TForgotActions,
} from "../actions/forgot";

type TForgotPasswordState = {
  isForgotSuccess: boolean;
  forgotRequest: boolean;
  forgotFailed: boolean;
  email: string;
  error: string;
};

export const forgotPasswordInitialState: TForgotPasswordState = {
  isForgotSuccess: false,
  forgotRequest: false,
  forgotFailed: false,
  email: "",
  error: "",
};

export const forgotPasswordReducer = (
  state = forgotPasswordInitialState,
  action: TForgotActions
): TForgotPasswordState => {
  switch (action.type) {
    case GET_INPUT_VALUE: {
      const { inputName, value } = action;
      return {
        ...state,
        [inputName]: value,
      };
    }
    case GET_FORGOT_REQUEST: {
      return {
        ...state,
        forgotRequest: true,
      };
    }
    case GET_FORGOT_SUCCESS: {
      return {
        ...state,
        forgotRequest: false,
        forgotFailed: false,
        isForgotSuccess: true,
      };
    }
    case GET_FORGOT_FAILED: {
      return {
        ...state,
        forgotRequest: false,
        forgotFailed: true,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
