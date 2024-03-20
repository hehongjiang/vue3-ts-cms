// service统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache' // 封装缓存操作实例

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 请求成功拦截
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    // 请求失败拦截
    requestInterceptorCatch: (err) => {
      return err
    },
    // 响应成功拦截
    responseInterceptor: (res) => {
      return res
    },
    // 响应失败拦截
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest
