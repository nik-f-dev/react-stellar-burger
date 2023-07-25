import { v4 as uuidv4 } from 'uuid';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const ADD_INGREDIENT_BUN = 'ADD_INGREDIENT_BUN';
export const MOVE_CARD = 'MOVE_CARD';

export const addIngredient = (ingredient) => {
  if(ingredient.type === 'bun') {
    return {
      type: ADD_INGREDIENT_BUN,
      ingredient: ingredient,
    }
  }
  return {
    type: ADD_INGREDIENT,
    ingredient: ingredient,
    id: uuidv4()
  }
};

export const moveCard = (dragIndex, hoverIndex) => ({
  type: MOVE_CARD,
  payload: { dragIndex, hoverIndex },
});
