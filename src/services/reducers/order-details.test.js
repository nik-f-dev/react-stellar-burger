import { orderDetailsReducer } from './order-details';
import * as types from '../actions/order-details';

describe('order details reducer', () => {
  it('should return the initial state', () => {
    expect(orderDetailsReducer(undefined, {})).toEqual({
      orderNumber: null,
      orderRequest: false,
      orderFailed: false,
      error: "",
    });
  });

  it('should handle GET_ORDER_REQUEST', () => {
    expect(orderDetailsReducer({},
      {
        type: types.GET_ORDER_REQUEST,
        orderRequest: true,
      }
    )).toEqual(
      {
        orderRequest: true,
      }
    );
  });

  it('should handle GET_ORDER_SUCCESS', () => {
    expect(orderDetailsReducer({},
      {
        type: types.GET_ORDER_SUCCESS,
        orderRequest: false,
        orderFailed: false,
        order: '1234',
      }
    )).toEqual(
      {
        orderRequest: false,
        orderFailed: false,
        orderNumber: '1234',
      }
    );
  });

  it('should handle CLEAR_ORDER_NUMBER', () => {
    expect(orderDetailsReducer({ orderNumber: '1234', },
      {
        type: types.CLEAR_ORDER_NUMBER,
        orderNumber: null,
      }
    )).toEqual(
      {
        orderNumber: null,
      }
    );
  });

  it('should handle GET_ORDER_FAILED', () => {
    expect(orderDetailsReducer({},
      {
        type: types.GET_ORDER_FAILED,
        orderRequest: false,
        orderFailed: true,
        error: 'error'
      }
    )).toEqual(
      {
        orderRequest: false,
        orderFailed: true,
        error: 'error'
      }
    );
  });
});
