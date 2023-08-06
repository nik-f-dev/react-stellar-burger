import { GET_INPUT_VALUE, GET_PROFILE_FAILED, GET_USER, CHANGE_USER, GET_PROFILE_REQUEST } from "../actions/profile";

const profileInitialState = {
  profileRequest: false,
  profileFailed: false,
  user: null,
  name: '',
  login: '',
  password: '',
  error: ''
}

export const profileReducer = (state = profileInitialState, action) => {
  switch(action.type) {
    case GET_INPUT_VALUE: {
      const { name, value } = action;
      return {
        ...state,
        [name]: value
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: action.user,
        profileRequest: false
      }
    }
    case CHANGE_USER: {
      return {
        ...state,
        user: action.user
      }
    }
    case GET_PROFILE_FAILED: {
      return {
        ...state,
        error: action.err
      }
    }
    case GET_PROFILE_REQUEST: {
      return {
        ...state,
        profileRequest: true
      }
    }
    default: {
      return state;
    }
  }
}
