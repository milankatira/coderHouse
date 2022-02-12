import axios from 'axios'
import {server_url} from '../constant/index'

export const sendOtp = (data) =>
  axios.post(`${server_url}/api/send-otp`, data);

  export const verifyOtp = (data) =>
  axios.post(`${server_url}/api/verify-otp`, data);