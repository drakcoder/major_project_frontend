import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.hackevolve.com",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // Set withCredentials to true
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
