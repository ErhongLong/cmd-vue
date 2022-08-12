import HYRequest from './request/request'
import { API_BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const hyRequest = new HYRequest({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  interceptorHooks: {
    // 这个实例定义的自己的拦截器，以后用这个class创建出来的实例都会有的拦截
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res.data
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest
