import { GET_INGREDIENT, CLEAR_INGREDIENT } from "../actions/ingredient-details";

const ingredientDetailsInitialState = {
  ingredient: {},
}

export const ingredientDetailsReducer = (state = ingredientDetailsInitialState, action) => {
  switch(action.type) {
    case GET_INGREDIENT: {
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
