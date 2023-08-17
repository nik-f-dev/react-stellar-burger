import {
  GET_FORM_VALUE,
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_FAILED,
  SHOW_PASSWORD,
  TRegisterActions,
} from "../actions/register";

type TRegisterState = {
  showPassword: boolean;
  registerRequest: boolean;
  registerFailed: boolean;
  error: string;
  name: string;
  email: string;
  password: string;
};

const registerInitialState: TRegisterState = {
  showPassword: false,
  registerRequest: false,
  registerFailed: false,
  error: "",
  name: "",
  email: "",
  password: "",
};

export const registerReducer = (
  state = registerInitialState,
  action: TRegisterActions
): TRegisterState => {
  switch (action.type) {
    case GET_FORM_VALUE: {
      const { inputName, value } = action;
      return {
        ...state,
        [inputName]: value,
      };
    }
    case GET_REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
      };
    }
    case GET_REGISTER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: false,
      };
    }
    case GET_REGISTER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
        error: action.error,
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
