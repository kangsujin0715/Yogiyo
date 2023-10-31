import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { xApiKey } from 'src/net/remoteConfig';

export const feAxios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 30000,
});
const feAxiosRequestHandler = async (request: InternalAxiosRequestConfig) => {
  return request;
};

const feAxiosResponseHandler = async (response: AxiosResponse) => {
  const { data } = response;
  return data;
};

const feAxiosErrorHandler = (error: AxiosError) => {
  return Promise.reject({
    code: error.status,
    message: '네트워크 통신 중 오류가 발생했습니다.',
  });
};

feAxios.interceptors.request.use(feAxiosRequestHandler);
feAxios.interceptors.response.use(feAxiosResponseHandler, feAxiosErrorHandler);

export const beAxios: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'x-api-key': xApiKey,
  },
  timeout: 30000,
});

const beAxiosRequestHandler = async (request: InternalAxiosRequestConfig) => {
  return request;
};

const beAxiosResponseHandler = async (response: AxiosResponse) => {
  const { data } = response;
  return data;
};

beAxios.interceptors.request.use(beAxiosRequestHandler);
beAxios.interceptors.response.use(beAxiosResponseHandler);
