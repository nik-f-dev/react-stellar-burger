import { orderDetailsReducer, orderDetailsInitialState } from './order-details';
import * as types from '../actions/order-details';

describe('order details reducer', () => {
  it('should return the initial state', () => {
    expect(orderDetailsReducer(undefined, {})).toEqual(orderDetailsInitialState);
  });

  it('should handle GET_ORDER_REQUEST', () => {
    expect(orderDetailsReducer(orderDetailsInitialState,
      {
        type: types.GET_ORDER_REQUEST,
        orderRequest: true,
      }
    )).toEqual(
      {
        ...orderDetailsInitialState,
        orderRequest: true,
      }
    );
  });

  it('should handle GET_ORDER_SUCCESS', () => {
    expect(orderDetailsReducer(orderDetailsInitialState,
      {
        type: types.GET_ORDER_SUCCESS,
        orderRequest: false,
        orderFailed: false,
        order: '1234',
      }
    )).toEqual(
      {
        ...orderDetailsInitialState,
        orderRequest: false,
        orderFailed: false,
        orderNumber: '1234',
      }
    );
  });

  it('should handle CLEAR_ORDER_NUMBER', () => {
    expect(orderDetailsReducer(orderDetailsInitialState,
      {
        type: types.CLEAR_ORDER_NUMBER,
        orderNumber: null,
      }
    )).toEqual(
      {
        ...orderDetailsInitialState,
        orderNumber: null,
      }
    );
  });

  it('should handle GET_ORDER_FAILED', () => {
    expect(orderDetailsReducer(orderDetailsInitialState,
      {
        type: types.GET_ORDER_FAILED,
        orderRequest: false,
        orderFailed: true,
        error: 'error'
      }
    )).toEqual(
      {
        ...orderDetailsInitialState,
        orderRequest: false,
        orderFailed: true,
        error: 'error'
      }
    );
  });
});
