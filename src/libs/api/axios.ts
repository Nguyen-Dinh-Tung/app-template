import axios, { AxiosRequestConfig } from "axios";
import store from "store/redux";

const instanceAxios = {
  baseURL: process.env.REACT_APP_SERVER_URI,
};

const axiosConfig = axios.create(instanceAxios);

export const request = ({ method, url, data, ...rest }: AxiosRequestConfig) => {
  let token = localStorage.getItem("access_token");
  const options: any = { method, url, data, ...rest };
  if (token) options.headers.Authorization = `Bearer ${token}`;
  return axiosConfig(options);
};

// axiosConfig.interceptors.response.use(
//   (response: any) => {
//     return response;
//   },
//   (error: any) => {
//     return error;
//   }
// );

export const configError = (err: any) => {
  if (err?.response?.data?.statusCode == 401) {
    localStorage.removeItem("access_token");
    store.dispatch({ type: "userInfo", payload: null });
  }

  const temp = err?.response?.data?.message || "Error";
  if (typeof temp == "string") return temp;
  return temp[0];
};
