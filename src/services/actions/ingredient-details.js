export const GET_INGREDIENT = 'GET_INGREDIENT';
export const CLEAR_INGREDIENT = 'CLEAR_INGREDIENT';

export const getIngredient = (ingredient) => {
  return {
    type: GET_INGREDIENT,
    payload: ingredient
  }
}

export const clearIngredient = () => {
  return {
    type: CLEAR_INGREDIENT,
  };
};
