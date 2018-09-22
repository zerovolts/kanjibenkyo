export const callApi = (endpoint, options) => {
  const token = localStorage.getItem("auth_token") || null;
  const config = {
    ...options,
    method: "POST",
    headers: {
      "content-type": "application/json"
    }
  };

  if (token) {
    config.headers.Authorization = `Bearer: ${token}`;
  }

  return fetch(endpoint, config).then(res => res.json());
};
