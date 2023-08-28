import { TCustomResponse } from "./types/types";
const baseUrl = "https://norma.nomoreparties.space/api/";

const checkResponse = (response: Response) => {
  if (response.ok) {
    return response.json();
  }
  return response.json().then((err: any) => Promise.reject(err));
};

const checkSuccess = (response: TCustomResponse) => {
  if (response.success) {
    return response;
  }
  return Promise.reject(`Ответ не success: ${response}`);
};

export function request(endpoint: string, options: RequestInit) {
  return fetch(`${baseUrl}${endpoint}`, options)
    .then(checkResponse)
    .then(checkSuccess);
}

const refreshToken = () => {
  return request("auth/token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
};

export function getUser() {
  return fetchWithRefresh(`${baseUrl}auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("accessToken") as string,
    },
  });
}

export const fetchWithRefresh = async (url: string, options: RequestInit) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err: any) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      if (refreshData.accessToken) {
        localStorage.setItem("accessToken", refreshData.accessToken);
        options.headers = {
          ...options.headers,
          authorization: refreshData.accessToken,
        };
      }
      if (refreshData.refreshToken) {
        localStorage.setItem("refreshToken", refreshData.refreshToken);
      }

      const res = await fetch(url, options);
      return checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};
