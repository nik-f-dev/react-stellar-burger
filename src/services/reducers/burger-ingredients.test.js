import { burgerIngredientsReducer, burgerIngredientsInitialState } from './burger-ingredients';
import * as types from '../actions/burger-ingredients';

describe('forgot password reducer', () => {
  it('should return the initial state', () => {
    expect(burgerIngredientsReducer(undefined, {})).toEqual(burgerIngredientsInitialState);
  });

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    expect(burgerIngredientsReducer(burgerIngredientsInitialState,
      {
        type: types.GET_INGREDIENTS_REQUEST,
        ingredientsRequest: true,
      }
    )).toEqual(
      {
        ...burgerIngredientsInitialState,
        ingredientsRequest: true,
      }
    );
  });

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    expect(burgerIngredientsReducer(burgerIngredientsInitialState,
      {
        type: types.GET_INGREDIENTS_SUCCESS,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: [{}],
      }
    )).toEqual(
      {
        ...burgerIngredientsInitialState,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: [{}],
      }
    );
  });

  it('should handle GET_INGREDIENTS_FAILED', () => {
    expect(burgerIngredientsReducer(burgerIngredientsInitialState,
      {
        type: types.GET_INGREDIENTS_FAILED,
        ingredientsRequest: false,
        ingredientsFailed: true,
        error: 'error',
      }
    )).toEqual(
      {
        ...burgerIngredientsInitialState,
        ingredientsRequest: false,
        ingredientsFailed: true,
        error: 'error'
      }
    );
  });

  it('should handle TURN_ON_HANDLE_INTERSECTION', () => {
    expect(burgerIngredientsReducer(burgerIngredientsInitialState,
      {
        type: types.TURN_ON_HANDLE_INTERSECTION,
        handleIntersecion: true,
      }
    )).toEqual(
      {
        ...burgerIngredientsInitialState,
        handleIntersecion: true,
      }
    );
  });

  it('should handle TURN_OFF_HANDLE_INTERSECTION', () => {
    expect(burgerIngredientsReducer(burgerIngredientsInitialState,
      {
        type: types.TURN_OFF_HANDLE_INTERSECTION,
        handleIntersecion: false,
      }
    )).toEqual(
      {
        ...burgerIngredientsInitialState,
        handleIntersecion: false
      }
    );
  });
});
