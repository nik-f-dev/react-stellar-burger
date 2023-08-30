import { burgerConstructorReducer } from './burger-constructor';
import * as types from '../actions/burger-constructor';

describe('forgot password reducer', () => {
  it('should return the initial state', () => {
    expect(burgerConstructorReducer(undefined, {})).toEqual({
      ingredientsConstructor: [],
      bun: null,
    });
  });

  it('should handle ADD_INGREDIENT', () => {
    const initialState = {
      ingredientsConstructor: [],
      bun: null,
    };

    const ingredientToAdd = {
      id: '123',
      type: 'souce',
      name: 'souce',
    };

    const action = {
      type: types.ADD_INGREDIENT,
      ingredient: ingredientToAdd,
      id: '123',
    };

    const expectedState = {
      ingredientsConstructor: [ingredientToAdd],
      bun: null,
    };

    expect(burgerConstructorReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_INGREDIENT_BUN', () => {
    const initialState = {
      ingredientsConstructor: [],
      bun: null,
    };

    const ingredientToAdd = {
      id: '123',
      type: 'bun',
      name: 'булка',
    };

    const action = {
      type: types.ADD_INGREDIENT_BUN,
      ingredient: ingredientToAdd,
      id: '123',
    };

    const expectedState = {
      ingredientsConstructor: [ingredientToAdd],
      bun: ingredientToAdd,
    };

    expect(burgerConstructorReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_INGREDIENT', () => {
    const initialState = {
      ingredientsConstructor: [
        {
          id: '123',
          type: 'sauce',
          name: 'соус',
        },
        {
          id: '124',
          type: 'sauce',
          name: 'соус2',
        }
      ],
      bun: null,
    };

    const action = {
      type: types.DELETE_INGREDIENT,
      id: '123',
    };

    const expectedState = {
      ingredientsConstructor: [
        {
          id: '124',
          type: 'sauce',
          name: 'соус2',
        }
      ],
      bun: null,
    };

    expect(burgerConstructorReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle RESET_INGREDIENTS', () => {
    const initialState = {
      ingredientsConstructor: [
        {
          id: '123',
          type: 'sauce',
          name: 'соус',
        },
        {
          id: '124',
          type: 'sauce',
          name: 'соус2',
        }
      ],
      bun: {
        id: '123',
        type: 'bun',
        name: 'булка',
      }
    };

    const action = {
      type: types.RESET_INGREDIENTS,
    };

    const expectedState = {
      ingredientsConstructor: [],
      bun: null,
    };

    expect(burgerConstructorReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle MOVE_CARD', () => {
    const initialState = {
      ingredientsConstructor: [
        { id: '1', type: 'souce' },
        { id: '2', type: 'main' },
        { id: '3', type: 'souce' },
      ],
      bun: null,
    };

    const dragIndex = 0;
    const hoverIndex = 2;

    const action = {
      type: types.MOVE_CARD,
      payload: { dragIndex, hoverIndex },
    };

    const expectedState = {
      ingredientsConstructor: [
        { id: '2', type: 'main' },
        { id: '3', type: 'souce' },
        { id: '1', type: 'souce' },
      ],
      bun: null,
    };

    expect(burgerConstructorReducer(initialState, action)).toEqual(expectedState);
  });
});
