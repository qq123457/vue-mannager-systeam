import axios from "axios";

import type { AxiosInstance } from "axios";

import type { AcRequestConfig, AcRequestInterceptors } from "./type";
import { ElLoading } from "element-plus";
import "element-plus/theme-chalk/el-loading.css";

const DEFAULT_LOADING = false;

class AcRequest {
  instance: AxiosInstance;
  interceptors?: AcRequestInterceptors;
  loading?: any;
  showLoading: boolean;

  constructor(config: AcRequestConfig) {
    this.instance = axios.create(config);
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    this.interceptors = config.interceptors;

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config: any) => {
        console.log("全局请求拦截");
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求数据......",
            fullscreen: true,
            background: "rgba(0,0,0, 0.3)"
          });
        }

        return config;
      },
      (err: any) => {
        console.log("全局失败");
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res: any) => {
        console.log("全局成功");

        // 将loading移除
        this.loading?.close();

        const data = res.data;
        // if (data.returnCode === "-1001") {
        //   console.log("请求失败");
        // } else {
        //   return data;
        // }
        return data;
      },
      (err: any) => {
        console.log("全局失败");
        // 判断不同的响应码显示不同的错误信息
        if (err.response.status === 404) {
          console.log("404 错误");
        }
        return err;
      }
    );
  }

  request<T = any>(config: AcRequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // 1. 单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        // 如果存在拦截器，就在内部使用，它的拦截器，让其转化返回
        config = config.interceptors.requestInterceptor(config);
      }
      // 2. 单个请求对loading的处理
      this.showLoading = config.showLoading ?? DEFAULT_LOADING;
      // 3. 发起请求
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 4. 单个请求对响应结果的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }

          // 将其设置为默认值
          this.showLoading = DEFAULT_LOADING;

          resolve(res);
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING;
          reject(err);
          return err;
        });
    });
  }

  get<T = any>(config: AcRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T = any>(config: AcRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }

  delete<T = any>(config: AcRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }

  put<T = any>(config: AcRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }

  // post() {}
}

export default AcRequest;
