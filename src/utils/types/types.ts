import { Action, ActionCreator } from "redux";
import { store } from "../../index";
import { ThunkAction } from "redux-thunk";
import { TTabActions } from "../../services/actions/tab";
import { TResetActions } from "../../services/actions/reset";
import { TRegisterActions } from "../../services/actions/register";
import { TProfileActions } from "../../services/actions/profile";
import { TOrderDetailsActions } from "../../services/actions/order-details";
import { TModalActions } from "../../services/actions/modal";
import { TIngredientDetailsActions } from "../../services/actions/ingredient-details";
import { TForgotActions } from "../../services/actions/forgot";
import { TBurgerIngredientsActions } from "../../services/actions/burger-ingredients";
import { TBurgerConstructorActions } from "../../services/actions/burger-constructor";
import { TLoginActions } from "../../services/actions/login";
import { TWsActions } from "../../services/actions/wsActionTypes";

export type TForm = {
  isForgotSuccess: boolean;
  forgotRequest: boolean;
  forgotFailed: boolean;
  email: string;
};

export type TUser = {
  email: string;
  name: string;
  password?: string;
};

export type TOrder = {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
  owner?: string;
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
  order?: { number: string };
  user?: TUser;
  data?: any;
};

export type TIngredientPictureProps = {
  index: number;
  numberOfPhotos?: string;
  ingredient: TIngredient;
  pictureWithNumber?: boolean;
};

export type TOrderProps = {
  fromProfile?: boolean;
  orderData?: TOrder;
};

export type TCompleteOrderProps = {
  isModal?: boolean;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DispatchFunc = () => AppDispatch | AppThunk;

export type TApplicationActions =
  | TTabActions
  | TResetActions
  | TRegisterActions
  | TProfileActions
  | TOrderDetailsActions
  | TModalActions
  | TIngredientDetailsActions
  | TForgotActions
  | TBurgerIngredientsActions
  | TBurgerConstructorActions
  | TLoginActions
  | TWsActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;
