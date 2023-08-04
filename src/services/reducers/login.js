import { GET_INPUT_VALUE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGIN_FAILED, SET_AUTH_CHECKED, GET_USER, RESET_USER, SHOW_PASSWORD } from "../actions/login";

const loginInitialState = {
  showPassword: 'false',
  loginRequest: false,
  loginFailed: false,
  isAuthChecked: false,
  user: null,
  email: '',
  password: ''
}

export const loginReducer = (state = loginInitialState, action) => {
  switch(action.type) {
    case GET_INPUT_VALUE: {
      const { name, value } = action;
      return {
        ...state,
        [name]: value
      };
    }
    case GET_LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
      };
    }
    case GET_LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: false,
        isAuthChecked: true,
        user: action.user
      };
    }
    case GET_LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true
      };
    }
    case SET_AUTH_CHECKED: {
      return {
        ...state,
        isAuthChecked: true
      }
    }
    case GET_USER: {
      return {
        ...state,
        user: action.user
      }
    }
    case RESET_USER: {
      return {
        ...state,
        user: null
      }
    }
    case SHOW_PASSWORD: {
      return {
        ...state,
        showPassword: !state.showPassword
      }
    }
    default: {
      return state;
    }
  }
}
