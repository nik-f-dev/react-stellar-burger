import { TIngredient } from "../../utils/types/types";
import {
  GET_INGREDIENTS,
  CLEAR_INGREDIENT,
  TIngredientDetailsActions,
} from "../actions/ingredient-details";

type TIngredientDetailsState = {
  ingredient: {} | TIngredient;
};

const ingredientDetailsInitialState: TIngredientDetailsState = {
  ingredient: {},
};

export const ingredientDetailsReducer = (
  state = ingredientDetailsInitialState,
  action: TIngredientDetailsActions
): TIngredientDetailsState => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredient: action.payload,
      };
    }
    case CLEAR_INGREDIENT: {
      return {
        ...state,
        ingredient: {},
      };
    }
    default: {
      return state;
    }
  }
};
