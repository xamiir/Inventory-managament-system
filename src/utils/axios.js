import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
});

instance.defaults.headers.common["Content-Type"] = "application/json";

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error && error.response && error.response.data);
  }
);

export default instance;
