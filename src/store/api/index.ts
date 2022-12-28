import axios, { AxiosRequestConfig } from "axios";
import { setLoading } from "components/layout/ApiLoading";
import notify from "components/UI/notify";
import store from "store/redux";
import API from "./url";

const ACCESS_TOKEN = "ACCESS_TOKEN";

const instanceAxios = {
  baseURL: process.env.REACT_APP_USER_URL,
};

const axiosConfig = axios.create(instanceAxios);

export const request = ({ method, url, data, ...rest }: AxiosRequestConfig) => {
  let token = localStorage.getItem(ACCESS_TOKEN);
  let options: any = { method, url, data, ...rest };
  if (token) {
    options = {
      ...options,
      headers: {
        Authorization: `${token}`,
      },
    };
  }
  return axiosConfig(options);
};

export const createAxios = (
  method: string,
  url?: string,
  data?: Record<string, any>,
  config?: Record<string, any>
) => {
  return request({
    method,
    url,
    params: method === "get" ? data : undefined,
    data: method !== "get" ? data : undefined,
    ...config,
  });
};

const api = {
  get: (...args: any[]): any => createAxios("get", ...args),
  post: (...args: any[]): any => createAxios("post", ...args),
  put: (...args: any[]): any => createAxios("put", ...args),
  patch: (...args: any[]): any => createAxios("patch", ...args),
  delete: (...args: any[]): any => createAxios("delete", ...args),
  download: (url: string): any =>
    createAxios("get", url, undefined, { responType: "blob" }),
};

//handle Request
axiosConfig.interceptors.request.use(
  function (config) {
    setLoading(true);
    return config;
  },
  function (error) {
    notify.error(configError(error));
    setLoading(false);
    throw error;
  }
);

//handle Response
axiosConfig.interceptors.response.use(
  (response: any) => {
    setLoading(false);
    return response;
  },
  (error: any) => {
    notify.error(configError(error));
    setLoading(false);
    throw error;
  }
);

export const configError = (err: any) => {
  if (err?.response?.status == 401) {
    localStorage.removeItem(ACCESS_TOKEN);
    store.dispatch({ type: "user", payload: null });
    return "Unauthorized";
  }

  const temp = err?.response?.data?.message || "Error";
  if (typeof temp == "string") return temp;
  return temp[0];
};

export { api, API };
