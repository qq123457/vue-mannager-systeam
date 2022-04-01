import { AxiosRequestConfig, AxiosResponse } from "axios";

interface AcRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (config: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

interface AcRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: AcRequestInterceptors<T>;
  showLoading?: boolean;
}

export { AcRequestConfig, AcRequestInterceptors };
