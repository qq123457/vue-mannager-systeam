// 同意出口

import AcRequest from "./request/index";
import { BASE_URL, TIME_OUT } from "./request/config";

const acRequest = new AcRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = "abacccssss";
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`
        };
      }

      console.log("实例的请求成功的拦截");
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log("实例的请求失败的拦截");
      return err;
    },
    responseInterceptor: (res) => {
      console.log("实例的响应成功的拦截");
      return res;
    },
    responseInterceptorCatch: (err) => {
      console.log("实例的响应失败的拦截");
      return err;
    }
  }
});
// export const acRequest2 = new AcRequest({
//   baseURL: "url1"
// });

export default acRequest;
