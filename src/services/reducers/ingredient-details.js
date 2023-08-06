import { GET_INGREDIENTS, CLEAR_INGREDIENT } from "../actions/ingredient-details";

const ingredientDetailsInitialState = {
  ingredient: {},
}

export const ingredientDetailsReducer = (state = ingredientDetailsInitialState, action) => {
  switch(action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredient: action.payload
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
}
