import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to every request if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL, // automatically picks localhost or Render URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default api;
