import { config } from "../config/config";
import axios from "axios";
import { getToken } from "./token";

export const api = axios.create({
  baseURL: config,
});

api.interceptors.request.use(
  async function (config) {
    const accessToken = getToken().accessToken;
    accessToken &&
      (config.headers = {
        Authorization: `Bearer ${accessToken}`,
      });
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    if (axios.isAxiosError(error) && error.response) {
      const { config, response } = error;
      if (response.data.status === 401) {
        window.location.href = "/auth/login";
      }
    }
  }
);
