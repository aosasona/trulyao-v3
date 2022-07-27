import axios from "axios";
import type { AxiosInstance } from "axios";
import { API_URL } from "../config/api.config";

///// AUTH /////
const auth = (token: string) => {
  const instance: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return instance;
};

///// AUTH /////
const noauth = () => {
  const instance: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return instance;
};

const request = { auth, noauth };

export default request;
