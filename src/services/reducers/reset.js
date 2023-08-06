import {
  GET_INPUT_VALUE,
  SHOW_PASSWORD,
  GET_RESET_REQUEST,
  GET_RESET_SUCCESS,
  GET_RESET_FAILED,
} from "../actions/reset";

const resetPasswordInitialState = {
  showPassword: false,
  isResetSuccess: false,
  resetRequest: false,
  resetFailed: false,
  password: "",
  code: "",
};

export const resetPasswordReducer = (
  state = resetPasswordInitialState,
  action
) => {
  switch (action.type) {
    case GET_INPUT_VALUE: {
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
    case GET_RESET_REQUEST: {
      return {
        ...state,
        registerRequest: true,
      };
    }
    case GET_RESET_SUCCESS: {
      return {
        ...state,
        isResetSuccess: true,
        registerRequest: false,
        registerFailed: false,
      };
    }
    case GET_RESET_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
