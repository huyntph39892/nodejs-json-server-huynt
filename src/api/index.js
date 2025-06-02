import axios from "axios";

const api = axios.create({
  baseURL: "https://nodejs-json-server-huynt-1.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  function (config) {
    console.log(config);
    const accesToken = localStorage.getItem("accesToken");
    if (accesToken) {
      config.headers.Authorization = `Bearer ${accesToken}`;
    }
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
