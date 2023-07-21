import { ADD_INGREDIENT, DELETE_INGREDIENT } from "../actions/burger-constructor";

const burgerConstructorInitialState = {
  ingredientsConstructor: [],
}

export const burgerConstructorReducer = (state = burgerConstructorInitialState, action) => {
  switch(action.type) {
    case ADD_INGREDIENT: {
      return { ...state, ingredientsConstructor: [ ...state.ingredientsConstructor, {...action.ingredient, id: action.id} ] };
    }
    case DELETE_INGREDIENT: {
      return { ...state, ingredientsConstructor: [ ...state.ingredientsConstructor.filter(item => item.id !== action.id)] };
    }
    default: {
      return state;
    }
  }
}
