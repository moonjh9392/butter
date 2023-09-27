import axios, { AxiosInstance } from 'axios';

export const BASE_URL: string = 'https://assignment.dev.buttercorp.kr';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const USER_SIGN_UP: string = `/api/v1/assignment/sign-up`;
export const USER_SIGN_IN: string = `/api/v1/assignment/sign-in`;
export const USER_INFO: string = `/api/v1/assignment/get-info`;
