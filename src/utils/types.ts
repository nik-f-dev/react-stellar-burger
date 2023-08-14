import { store } from "../index";

export type TForm = {
  isForgotSuccess: boolean;
  forgotRequest: boolean;
  forgotFailed: boolean;
  email: string;
};

export type TUser = {
  email: string;
  name: string;
  password: string;
};

export type TLoginState = {
  logoutRequest: boolean;
  logoutError: string;
  showPassword: boolean;
  loginRequest: boolean;
  loginFailed: boolean;
  isAuthChecked: boolean;
  user: null | TUser;
  previousUser: null | TUser;
  changeError: string;
  email: string;
  password: string;
  name: string;
};

export type TModal = {
  isOpen: boolean;
  modalType: null;
};

export type TIngredientsRequest = {
  isLoading: boolean;
  hasError: boolean;
  error: string;
};

export type TRegisterState = {
  showPassword: boolean;
  registerRequest: boolean;
  registerFailed: boolean;
  error: string;
  name: string;
  email: string;
  password: string;
};

export type TResetState = {
  showPassword: boolean;
  isResetSuccess: boolean;
  resetRequest: boolean;
  resetFailed: boolean;
  password: string;
  code: string;
};

export type TProtected = {
  onlyUnAuth: boolean;
  children: JSX.Element;
};

export type TIngredient = {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
  id?: string;
};

export type TConstructorProps = {
  index: number;
  ingredient: TIngredient;
  type: string;
  description?: string;
  position?: "top" | "bottom" | undefined;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
};

export type TCustomResponse = Response & {
  success: boolean;
  accessToken?: string;
  refreshToken?: string;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DispatchFunc = () => AppDispatch;
