import { request } from '../../utils/api';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const CLEAR_ORDER_NUMBER = 'CLEAR_ORDER_NUMBER';

export function clearOrderNumber() {
  return {
    type: CLEAR_ORDER_NUMBER
  }
};

export function getOrder(ingredientsId) {
  return function(dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST
    });
    request('orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ingredients: ingredientsId}),
    })
      .then((data) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: data.order.number
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ORDER_FAILED,
          error: error.message
        });
      });
  };
};
