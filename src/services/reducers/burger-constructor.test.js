import { burgerConstructorReducer, burgerConstructorInitialState } from './burger-constructor';
import * as types from '../actions/burger-constructor';

const ingredientToAdd = {
  id: '123',
  type: 'souce',
  name: 'souce',
};

const ingredientsConstructor = [
  {
    id: '1',
    type: 'sauce',
    name: 'соус',
  },
  {
    id: '2',
    type: 'sauce',
    name: 'соус2',
  },
  {
    id: '3',
    type: 'sauce',
    name: 'соус3',
  }
]

describe('forgot password reducer', () => {
  it('should return the initial state', () => {
    expect(burgerConstructorReducer(undefined, {})).toEqual(burgerConstructorInitialState);
  });

  it('should handle ADD_INGREDIENT', () => {
    const action = {
      type: types.ADD_INGREDIENT,
      ingredient: ingredientToAdd,
      id: '123',
    };

    const expectedState = {
      ...burgerConstructorInitialState,
      ingredientsConstructor: [ingredientToAdd],
      bun: null,
    };

    expect(burgerConstructorReducer(burgerConstructorInitialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_INGREDIENT_BUN', () => {
    const action = {
      type: types.ADD_INGREDIENT_BUN,
      ingredient: ingredientToAdd,
      id: '123',
    };

    const expectedState = {
      ...burgerConstructorInitialState,
      ingredientsConstructor: [ingredientToAdd],
      bun: ingredientToAdd,
    };

    expect(burgerConstructorReducer(burgerConstructorInitialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_INGREDIENT', () => {
    const initialState = {
      ...burgerConstructorInitialState,
      ingredientsConstructor: [
        ...ingredientsConstructor
      ],
      bun: null,
    };

    const action = {
      type: types.DELETE_INGREDIENT,
      id: '1',
    };

    const expectedState = {
      ...burgerConstructorInitialState,
      ingredientsConstructor: [
        {
          id: '2',
          type: 'sauce',
          name: 'соус2',
        },
        {
          id: '3',
          type: 'sauce',
          name: 'соус3',
        }
      ],
      bun: null,
    };

    expect(burgerConstructorReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle RESET_INGREDIENTS', () => {
    const initialState = {
      ...burgerConstructorInitialState,
      ingredientsConstructor: [
        ...ingredientsConstructor
      ],
      bun: {
        id: '3',
        type: 'bun',
        name: 'булка',
      }
    };

    const action = {
      type: types.RESET_INGREDIENTS,
    };

    const expectedState = {
      ...burgerConstructorInitialState,
      ingredientsConstructor: [],
      bun: null,
    };

    expect(burgerConstructorReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle MOVE_CARD', () => {
    const initialState = {
      ...burgerConstructorInitialState,
      ingredientsConstructor: [
        ...ingredientsConstructor
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
      ...burgerConstructorInitialState,
      ingredientsConstructor: [
        {
          id: '2',
          type: 'sauce',
          name: 'соус2',
        },
        {
          id: '3',
          type: 'sauce',
          name: 'соус3',
        },
        {
          id: '1',
          type: 'sauce',
          name: 'соус',
        }
      ],
      bun: null,
    };

    expect(burgerConstructorReducer(initialState, action)).toEqual(expectedState);
  });
});
