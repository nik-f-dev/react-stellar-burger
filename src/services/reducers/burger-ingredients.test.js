import { burgerIngredientsReducer } from './burger-ingredients';
import * as types from '../actions/burger-ingredients';

describe('forgot password reducer', () => {
  it('should return the initial state', () => {
    expect(burgerIngredientsReducer(undefined, {})).toEqual({
      ingredients: [],
      ingredientsRequest: false,
      ingredientsFailed: false,
      handleIntersecion: true,
      error: "",
    });
  });

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    expect(burgerIngredientsReducer({},
      {
        type: types.GET_INGREDIENTS_REQUEST,
        ingredientsRequest: true,
      }
    )).toEqual(
      {
        ingredientsRequest: true,
      }
    );
  });

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    expect(burgerIngredientsReducer({},
      {
        type: types.GET_INGREDIENTS_SUCCESS,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: [{}],
      }
    )).toEqual(
      {
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: [{}],
      }
    );
  });

  it('should handle GET_INGREDIENTS_FAILED', () => {
    expect(burgerIngredientsReducer({},
      {
        type: types.GET_INGREDIENTS_FAILED,
        ingredientsRequest: false,
        ingredientsFailed: true,
        error: 'error',
      }
    )).toEqual(
      {
        ingredientsRequest: false,
        ingredientsFailed: true,
        error: 'error'
      }
    );
  });

  it('should handle TURN_ON_HANDLE_INTERSECTION', () => {
    expect(burgerIngredientsReducer({ handleIntersecion: false },
      {
        type: types.TURN_ON_HANDLE_INTERSECTION,
        handleIntersecion: true,
      }
    )).toEqual(
      {
        handleIntersecion: true,
      }
    );
  });

  it('should handle TURN_OFF_HANDLE_INTERSECTION', () => {
    expect(burgerIngredientsReducer({ handleIntersecion: true },
      {
        type: types.TURN_OFF_HANDLE_INTERSECTION,
        handleIntersecion: false,
      }
    )).toEqual(
      {
        handleIntersecion: false
      }
    );
  });
});
