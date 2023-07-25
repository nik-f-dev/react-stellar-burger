export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const CLEAR_ORDER_NUMBER = 'CLEAR_ORDER_NUMBER';

const url = 'https://norma.nomoreparties.space/api/orders';

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
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ingredients: ingredientsId}),
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(`Ошибка ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (data.success) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            order: data.order.number
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_ORDER_FAILED,
          error: error.message
        });
      });
  };
};
