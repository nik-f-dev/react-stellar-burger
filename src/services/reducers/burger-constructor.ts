import update from "immutability-helper";

import {
  ADD_INGREDIENT,
  ADD_INGREDIENT_BUN,
  MOVE_CARD,
  DELETE_INGREDIENT,
  TBurgerConstructorActions,
  RESET_INGREDIENTS,
} from "../actions/burger-constructor";
import { TIngredient } from "../../utils/types/types";

type TBurgerConstrucorState = {
  ingredientsConstructor: Array<TIngredient>;
  bun: null | { type: string };
};

const burgerConstructorInitialState: TBurgerConstrucorState = {
  ingredientsConstructor: [],
  bun: null,
};

export const burgerConstructorReducer = (
  state = burgerConstructorInitialState,
  action: TBurgerConstructorActions
): TBurgerConstrucorState => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredientsConstructor: [
          ...state.ingredientsConstructor,
          { ...action.ingredient, id: action.id },
        ],
      };
    }
    case ADD_INGREDIENT_BUN: {
      return {
        ...state,
        ingredientsConstructor: [
          ...state.ingredientsConstructor.filter((item) => item.type !== "bun"),
          { ...action.ingredient, id: action.id },
        ],
        bun: action.ingredient,
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredientsConstructor: [
          ...state.ingredientsConstructor.filter(
            (item) => item.id !== action.id
          ),
        ],
      };
    }
    case MOVE_CARD: {
      const { dragIndex, hoverIndex } = action.payload;
      return {
        ...state,
        ingredientsConstructor: update(state.ingredientsConstructor, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, state.ingredientsConstructor[dragIndex]],
          ],
        }),
      };
    }
    case RESET_INGREDIENTS: {
      return {
        ...state,
        ingredientsConstructor: [],
        bun: null,
      };
    }
    default: {
      return state;
    }
  }
};
