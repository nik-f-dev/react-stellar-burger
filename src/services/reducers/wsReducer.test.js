import { wsReducer } from './wsReducer';
import * as types from '../actions/wsActionTypes';

describe('WebSocket reducer', () => {
  it('should return the initial state', () => {
    expect(wsReducer(undefined, {})).toEqual({
      wsConnected: false,
      orders: null,
      total: null,
      totalToday: null,
      userTotal: null,
      userTotalToday: null,
      userOrders: null,
    });
  });

  it('should handle WS_CONNECTION_SUCCESS', () => {
    expect(wsReducer({},
      {
        type: types.WS_CONNECTION_SUCCESS,
        wsConnected: true
      }
    )).toEqual(
      {
        wsConnected: true
      }
    );
  });

  it('should handle WS_CONNECTION_ERROR', () => {
    expect(wsReducer({},
      {
        type: types.WS_CONNECTION_ERROR,
        wsConnected: false
      }
    )).toEqual(
      {
        wsConnected: false
      }
    );
  });

  it('should handle WS_CONNECTION_CLOSED', () => {
    expect(wsReducer({},
      {
        type: types.WS_CONNECTION_CLOSED,
        wsConnected: false
      }
    )).toEqual(
      {
        wsConnected: false
      }
    );
  });

  it('should handle WS_GET_USER_ORDER_DATA', () => {
    expect(wsReducer(
      {
        userOrders: {},
        userTotal: 5000,
        userTotalToday: 30,
      },
      {
        type: types.WS_GET_USER_ORDER_DATA,
        payload: {
          orders: {},
          total: 6000,
          totalToday: 40,
        }
      }
    )).toEqual(
      {
        userOrders: {},
        userTotal: 6000,
        userTotalToday: 40,
      }
    );
  });

  it('should handle WS_GET_ORDER_DATA', () => {
    expect(wsReducer(
      {
        orders: {},
        total: 2000,
        totalToday: 22,
      },
      {
        type: types.WS_GET_ORDER_DATA,
        payload: {
          orders: {},
          total: 3000,
          totalToday: 50,
        }
      }
    )).toEqual(
      {
        orders: {},
        total: 3000,
        totalToday: 50,
      }
    );
  });
});
