import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burger-ingredients";
import { orderDetailsReducer } from "./order-details";
import { burgerConstructorReducer } from "./burger-constructor";
import { ingredientDetailsReducer } from "./ingredient-details";
import { modalReducer } from "./modal";
import { tabReducer } from "./tab";
import { loginReducer } from "./login";
import { registerReducer } from "./register";
import { forgotPasswordReducer } from "./forgot";
import { resetPasswordReducer } from "./reset";
import { profileReducer } from "./profile";

export const rootReducer = combineReducers({
  login: loginReducer,
  burgerIngredients: burgerIngredientsReducer,
  orderDetails: orderDetailsReducer,
  burgerConstructor: burgerConstructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  modal: modalReducer,
  tab: tabReducer,
  register: registerReducer,
  forgot: forgotPasswordReducer,
  reset: resetPasswordReducer,
  profile: profileReducer,
});
