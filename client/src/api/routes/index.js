import axios from "axios";
import { server_url } from "../constant/index";
axios.defaults.withCredentials = true;

export const sendOtp = (data) => axios.post(`${server_url}/api/send-otp`, data);

export const verifyOtp = (data) =>
  axios.post(`${server_url}/api/verify-otp`, data);

export const activate = (data) =>
  axios.post(`${server_url}/api/activate`, data);
