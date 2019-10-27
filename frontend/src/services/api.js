import axios from "axios";
import { getToken } from "./auth";
import base from "../_env";

const api = axios.create({
  baseURL: base.ApiUrl
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;