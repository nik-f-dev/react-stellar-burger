import { ingredientDetailsReducer } from './ingredient-details';
import * as types from '../actions/ingredient-details';

describe('ingredient details reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientDetailsReducer(undefined, {})).toEqual({
      ingredient: {},
    });
  });

  it('should handle GET_INGREDIENTS', () => {
    expect(ingredientDetailsReducer({ ingredient: {} },
      {
        type: types.GET_INGREDIENTS,
        payload: {
          name: 'ingredient',
          price: '1000'
        }
      }
    )).toEqual(
      {
        ingredient: {
          name: 'ingredient',
          price: '1000'
        }
      }
    );
  });

  it('should handle CLEAR_INGREDIENT', () => {
    expect(ingredientDetailsReducer(
      {
        ingredient: {
          name: 'ingredient',
          price: '1000'
        }
      },
      {
        type: types.CLEAR_INGREDIENT,
        ingredient: {}
      }
    )).toEqual(
      {
        ingredient: {}
      }
    );
  });
});
