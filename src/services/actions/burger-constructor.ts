import { v4 as uuidv4 } from "uuid";
import { TIngredient } from "../../utils/types/types";

export const ADD_INGREDIENT: "ADD_INGREDIENT" = "ADD_INGREDIENT";
export const DELETE_INGREDIENT: "DELETE_INGREDIENT" = "DELETE_INGREDIENT";
export const ADD_INGREDIENT_BUN: "ADD_INGREDIENT_BUN" = "ADD_INGREDIENT_BUN";
export const MOVE_CARD: "MOVE_CARD" = "MOVE_CARD";

export type TRemoveIngredient = {
  readonly type: typeof DELETE_INGREDIENT;
  readonly id: string;
};

export type TAddIngredient =
  | {
      readonly type: typeof ADD_INGREDIENT_BUN;
      readonly ingredient: TIngredient;
      readonly id: string;
    }
  | {
      readonly type: typeof ADD_INGREDIENT;
      readonly ingredient: TIngredient;
      readonly id: string;
    };

export type TMoveCard = {
  readonly type: typeof MOVE_CARD;
  payload: { dragIndex: number; hoverIndex: number };
};

export const removeIngredient = (ingredientId: string): TRemoveIngredient => {
  console.log(ingredientId);
  return { type: DELETE_INGREDIENT, id: ingredientId };
};

export const addIngredient = (ingredient: TIngredient): TAddIngredient => {
  if (ingredient.type === "bun") {
    return {
      type: ADD_INGREDIENT_BUN,
      ingredient: ingredient,
      id: uuidv4(),
    };
  }
  return {
    type: ADD_INGREDIENT,
    ingredient: ingredient,
    id: uuidv4(),
  };
};

export const moveCard = (dragIndex: number, hoverIndex: number): TMoveCard => ({
  type: MOVE_CARD,
  payload: { dragIndex, hoverIndex },
});

export type TBurgerConstructorActions =
  | TAddIngredient
  | TMoveCard
  | TRemoveIngredient;
