const baseUrl = 'https://norma.nomoreparties.space/api/';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = (res) => {
  if (res && res.success) {
    return res;
  }
  return Promise.reject(`Ответ не success: ${res}`);
};

export function request(endpoint, options) {
  return fetch(`${baseUrl}${endpoint}`, options)
    .then(checkResponse)
    .then(checkSuccess)
}
