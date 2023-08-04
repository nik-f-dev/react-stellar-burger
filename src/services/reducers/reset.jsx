import { GET_INPUT_VALUE, SHOW_PASSWORD } from "../actions/reset";

const resetPasswordInitialState = {
  showPassword: false,
  resetRequest: false,
  resetFailed: false,
  email: "",
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
