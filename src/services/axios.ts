import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ApiError } from '../types/error';

const config: AxiosRequestConfig = {
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const AGENT_ID = import.meta.env.VITE_BASE_AGENT_ID;
const BASE_URL = import.meta.env.VITE_API_BASE_URL
const baseURL = `${BASE_URL}/${AGENT_ID}`;

const api: AxiosInstance = axios.create({ baseURL, ...config });

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError<ApiError>): Promise<never> => {
    return Promise.reject(error);
  }
);

export default api;
