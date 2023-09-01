import { wsReducer, wsInitialState } from './wsReducer';
import * as types from '../actions/wsActionTypes';

const payload = {
  orders: {},
  total: 6000,
  totalToday: 40,
}

describe('WebSocket reducer', () => {
  it('should return the initial state', () => {
    expect(wsReducer(undefined, {})).toEqual(wsInitialState);
  });

  it('should handle WS_CONNECTION_SUCCESS', () => {
    expect(wsReducer(wsInitialState,
      {
        type: types.WS_CONNECTION_SUCCESS,
        wsConnected: true
      }
    )).toEqual(
      {
        ...wsInitialState,
        wsConnected: true
      }
    );
  });

  it('should handle WS_CONNECTION_ERROR', () => {
    expect(wsReducer(wsInitialState,
      {
        type: types.WS_CONNECTION_ERROR,
        wsConnected: false
      }
    )).toEqual(
      {
        ...wsInitialState,
        wsConnected: false
      }
    );
  });

  it('should handle WS_CONNECTION_CLOSED', () => {
    expect(wsReducer(wsInitialState,
      {
        type: types.WS_CONNECTION_CLOSED,
        wsConnected: false
      }
    )).toEqual(
      {
        ...wsInitialState,
        wsConnected: false
      }
    );
  });

  it('should handle WS_GET_USER_ORDER_DATA', () => {
    expect(wsReducer(
      wsInitialState,
      {
        type: types.WS_GET_USER_ORDER_DATA,
        payload: {
          ...payload
        }
      }
    )).toEqual(
      {
        ...wsInitialState,
        userOrders: {},
        userTotal: 6000,
        userTotalToday: 40,
      }
    );
  });

  it('should handle WS_GET_ORDER_DATA', () => {
    expect(wsReducer(
      wsInitialState,
      {
        type: types.WS_GET_ORDER_DATA,
        payload: {
          ...payload
        }
      }
    )).toEqual(
      {
        ...wsInitialState,
        orders: {},
        total: 6000,
        totalToday: 40,
      }
    );
  });
});
