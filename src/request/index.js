import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'
import router from '@/router'
import store from '@/store'
import { clearLoginInfo } from '@/utils'

const http = {}

const instance = axios.create({
  timeout: 100000, // 请求超时时间
  withCredentials: true // 选项表明了是否是跨域请求
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 请求头添加token
    if (sessionStorage.getItem('token')) {
      config.headers.token = sessionStorage.getItem('token')
    }
    // 默认以json格式提交，formType=true 表示以表单格式提交
    if(config.data && config.data.formType){
      config.data = config.data && qs.stringify(config.data)
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器即异常处理
instance.interceptors.response.use(
  response => {
    const { code } = response.data
    switch (code) {
      case 400:
        Message.error('请求出错')
        break
      case 401:
        Message.warning('授权失败，请重新登录')
        clearLoginInfo()
        this.router.push({ path: '/login' })
        return
      case 403:
        Message.warning('拒绝访问')
        break
      case 404:
        Message.warning('请求错误,未找到该资源')
        break
      case 500:
        Message.warning('服务端错误')
        break
    }
    return response.data
  },
  err => {
    if (err && err.response) {
      
    } else {
      err.message = '连接服务器失败'
    }
    // Message.error({
    //     message: err.message
    // })
    return Promise.reject(err.response)
  }
)

http.get = function (url, options) {
  let loading
  // if (!options || options.isShowLoading !== false) {
  //   loading = document.getElementById('ajaxLoading')
  //   loading.style.display = 'block'
  // }
  return instance.get(url, options)
}

http.post = function (url, data, options) {
  let loading
  // if (!options || options.isShowLoading !== false) {
  //   loading = document.getElementById('ajaxLoading')
  //   loading.style.display = 'block'
  // }
  return instance.post(url, data, options)
}

export default http