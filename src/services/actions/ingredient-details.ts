import { TIngredient } from "../../utils/types/types";

export const GET_INGREDIENTS: "GET_INGREDIENTS" = "GET_INGREDIENTS";
export const CLEAR_INGREDIENT: "CLEAR_INGREDIENT" = "CLEAR_INGREDIENT";

export type TGetIngredient = {
  readonly type: typeof GET_INGREDIENTS;
  readonly payload: TIngredient;
};

export type TClearIngredient = {
  readonly type: typeof CLEAR_INGREDIENT;
};

export const getIngredient = (ingredient: TIngredient): TGetIngredient => {
  return {
    type: GET_INGREDIENTS,
    payload: ingredient,
  };
};

export const clearIngredient = (): TClearIngredient => {
  return {
    type: CLEAR_INGREDIENT,
  };
};

export type TIngredientDetailsActions = TGetIngredient | TClearIngredient;
