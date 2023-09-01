import { TIngredient } from "../../utils/types/types";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  TURN_ON_HANDLE_INTERSECTION,
  TURN_OFF_HANDLE_INTERSECTION,
  TBurgerIngredientsActions,
} from "../actions/burger-ingredients";

type TBurgerIngredientsState = {
  ingredients: [] | ReadonlyArray<TIngredient>;
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  handleIntersecion: boolean;
  error: string;
};

export const burgerIngredientsInitialState: TBurgerIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  handleIntersecion: true,
  error: "",
};

export const burgerIngredientsReducer = (
  state = burgerIngredientsInitialState,
  action: TBurgerIngredientsActions
): TBurgerIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: action.ingredients,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
        error: action.error,
      };
    }
    case TURN_ON_HANDLE_INTERSECTION: {
      return {
        ...state,
        handleIntersecion: true,
      };
    }
    case TURN_OFF_HANDLE_INTERSECTION: {
      return {
        ...state,
        handleIntersecion: false,
      };
    }
    default: {
      return state;
    }
  }
};
