import axios from 'axios';

const BASE_URL = 'https://assignment.dev.buttercorp.kr';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const USER_SIGN_UP = `/api/v1/assignment/sign-up`;
export const USER_SIGN_IN = `/api/v1/assignment/sign-in`;
export const USER_INFO = `/api/v1/assignment/get-info`;
