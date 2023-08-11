const baseUrl = 'https://norma.nomoreparties.space/api/';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
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

const refreshToken = () => {
  return request('auth/token', {
    method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      })
  })
};

export function getUser() {
    return fetchWithRefresh(`${baseUrl}auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken")
      }
    })
  };

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("accessToken", refreshData.accessToken);
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};
