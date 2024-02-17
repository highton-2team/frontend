import { ACCESS_TOKEN } from "../config/config";

export const getToken = () => localStorage.getItem(ACCESS_TOKEN);
export const setToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
