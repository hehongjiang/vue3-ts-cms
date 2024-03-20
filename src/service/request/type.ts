import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义请求、响应拦截类型
export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 定义请求参数类型
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}
