import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const baseURL = process.env.API_BASE_URL;

interface CustomAxiosConfig extends AxiosRequestConfig {
  next?: {
    revalidate?: boolean | number;
  };
}

export class Client {
  constructor() {
    axios.defaults.baseURL = `${baseURL}`;
    axios.defaults.xsrfHeaderName = "X-CSRFToken";
    axios.defaults.responseEncoding = "utf8";
    // axios.defaults.headers.common['Cookie'] = "JSESSIONID=6692A8DB7CA4BDAA4520CFC2FC346B75"
    const customConfig: CustomAxiosConfig = {
      next: { revalidate: 10 },
    };

    const mergedConfig = { ...axios.defaults, ...customConfig };

    this.api = axios.create(mergedConfig);

    this.api.defaults.withCredentials = true;
  }
  api: AxiosInstance;
}
