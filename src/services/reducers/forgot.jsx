import { GET_INPUT_VALUE } from "../actions/forgot";

const forgotPasswordInitialState = {
  forgotRequest: false,
  forgotFailed: false,
  email: "",
};

export const forgotPasswordReducer = (
  state = forgotPasswordInitialState,
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
    // case GET_REGISTER_REQUEST: {
    //   return {
    //     ...state,
    //     registerRequest: true,
    //   };
    // }
    // case GET_REGISTER_SUCCESS: {
    //   return {
    //     ...state,
    //     registerRequest: false,
    //     registerFailed: false,
    //   };
    // }
    // case GET_REGISTER_FAILED: {
    //   return {
    //     ...state,
    //     registerRequest: false,
    //     registerFailed: true,
    //     error: action.error,
    //   };
    // }
    // case SHOW_PASSWORD: {
    //   return {
    //     ...state,
    //     showPassword: !state.showPassword,
    //   };
    // }
    default: {
      return state;
    }
  }
};
