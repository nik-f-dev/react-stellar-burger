import { ADD_INGREDIENT, DELETE_INGREDIENT, ADD_INGREDIENT_BUN } from "../actions/burger-constructor";

const burgerConstructorInitialState = {
  ingredientsConstructor: [],
  bun: null
}

export const burgerConstructorReducer = (state = burgerConstructorInitialState, action) => {
  switch(action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredientsConstructor: [ ...state.ingredientsConstructor, { ...action.ingredient, id: action.id, order: state.ingredientsConstructor.length } ]
      };
    }
    case ADD_INGREDIENT_BUN: {
      return {
        ...state,
        ingredientsConstructor: [ ...state.ingredientsConstructor.filter(item => item.type !== 'bun'), { ...action.ingredient } ],
        bun: action.ingredient
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredientsConstructor: [ ...state.ingredientsConstructor.filter(item => item.id !== action.id)]
      };
    }
    default: {
      return state;
    }
  }
}
