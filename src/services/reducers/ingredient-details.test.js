import { ingredientDetailsReducer, ingredientDetailsInitialState } from './ingredient-details';
import * as types from '../actions/ingredient-details';

const ingredient = {
  name: 'ingredient',
  price: '1000'
}

describe('ingredient details reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientDetailsReducer(undefined, {})).toEqual({
      ingredient: {},
    });
  });

  it('should handle GET_INGREDIENTS', () => {
    expect(ingredientDetailsReducer(ingredientDetailsInitialState,
      {
        type: types.GET_INGREDIENTS,
        payload: {
          ...ingredient
        }
      }
    )).toEqual(
      {
        ...ingredientDetailsInitialState,
        ingredient: {
          ...ingredient
        }
      }
    );
  });

  it('should handle CLEAR_INGREDIENT', () => {
    expect(ingredientDetailsReducer(
      ingredientDetailsInitialState,
      {
        type: types.CLEAR_INGREDIENT,
        ingredient: {}
      }
    )).toEqual(
      {
        ...ingredientDetailsInitialState,
        ingredient: {}
      }
    );
  });
});
