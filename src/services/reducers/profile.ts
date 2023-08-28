import {
  GET_INPUT_VALUE,
  GET_PROFILE_FAILED,
  GET_USER,
  GET_PROFILE_REQUEST,
  TProfileActions,
} from "../actions/profile";
import { TUser } from "../../utils/types/types";

type TProfileState = {
  profileRequest: boolean;
  profileFailed: boolean;
  user: null | TUser;
  name: string;
  login: string;
  password: string;
  error: string;
};

const profileInitialState: TProfileState = {
  profileRequest: false,
  profileFailed: false,
  user: null,
  name: "",
  login: "",
  password: "",
  error: "",
};

export const profileReducer = (
  state = profileInitialState,
  action: TProfileActions
): TProfileState => {
  switch (action.type) {
    case GET_INPUT_VALUE: {
      const { name, value } = action;
      return {
        ...state,
        [name]: value,
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: action.user,
        profileRequest: false,
      };
    }
    case GET_PROFILE_FAILED: {
      return {
        ...state,
        error: action.err,
      };
    }
    case GET_PROFILE_REQUEST: {
      return {
        ...state,
        profileRequest: true,
      };
    }
    default: {
      return state;
    }
  }
};
