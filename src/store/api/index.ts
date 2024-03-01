import axios, { AxiosRequestConfig } from "axios";
import { setLoading } from "components/layout/ApiLoading";
import { toast } from "components/UI/toast";
import { store } from "store/redux";
import { API } from "./url";
export { API };

const ACCESS_TOKEN = "ACCESS_TOKEN";

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URI,
});

export const request = ({ method, url, data, ...rest }: AxiosRequestConfig) => {
  let token = localStorage.getItem(ACCESS_TOKEN);
  let options: any = { method, url, data, ...rest };
  if (token) {
    options = {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return axiosConfig(options);
};

export const api = {
  get: (url: string, params: any) => request({ method: "get", url, params }),
  post: (url: string, data: any) => request({ method: "post", url, data }),
  put: (url: string, data: any) => request({ method: "put", url, data }),
  patch: (url: string, data: any) => request({ method: "patch", url, data }),
  delete: (url: string, data: any) => request({ method: "delete", url, data }),
  download: (url: string) =>
    request({ method: "get", url, responseType: "blob" }),
};

//handle Request
axiosConfig.interceptors.request.use(
  function (config) {
    setLoading(true);
    return config;
  },
  function (error) {
    toast.error(configError(error));
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
    toast.error(configError(error));
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
