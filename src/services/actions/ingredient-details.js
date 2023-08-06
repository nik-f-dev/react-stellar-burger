export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const CLEAR_INGREDIENT = 'CLEAR_INGREDIENT';

export const getIngredient = (ingredient) => {
  return {
    type: GET_INGREDIENTS,
    payload: ingredient
  }
}

export const clearIngredient = () => {
  return {
    type: CLEAR_INGREDIENT,
  };
};
