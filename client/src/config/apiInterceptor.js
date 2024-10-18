import axios from "axios";
import { ReqresApi } from "./global";

const createAxiosInstanceWithInterceptor = (baseURL, token) => {
  const instance = axios.create({
    baseURL: baseURL,
  });

  instance.interceptors.request.use(
    (config) => {
      let details;
      if (token === "reqresusertoken") {
        details = localStorage.getItem("reqresusertoken");
      }
      if (details) {
        config.headers["Authorization"] = `${details}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

const reqResAxiosInstance = createAxiosInstanceWithInterceptor(
  ReqresApi,
  "reqresusertoken"
);

export {
  reqResAxiosInstance,
};