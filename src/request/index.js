import axios from 'axios'
import qs from 'qs'
import store from '@/store'

const http = {}

let instance = axios.create({
  timeout: 5000,
  validateStatus(status) {
    switch (status) {
      case 400:
        this.$message.error('请求出错')
        break
      case 401:
        this.$message.warning('授权失败，请重新登录')
        store.commit('LOGIN_OUT')
        setTimeout(() => {
          window.location.reload()
        }, 1000)
        return
      case 403:
        this.$message.warning('拒绝访问')
        break
      case 404:
        this.$message.warning('请求错误,未找到该资源')
        break
      case 500:
        this.$message.warning('服务端错误')
        break
    }
    return status >= 200 && status < 300
  }
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 请求头添加token
    if (sessionStorage.getItem('token')) {
      config.headers.token = sessionStorage.getItem('token')
    }
    // 默认以表单格式提交，jsonType=true表示以 json 格式提交
    if(config.data && !config.data.jsonType){
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
    return response.data
  },
  err => {
    if (err && err.response) {
    } else {
      err.message = '连接服务器失败'
    }
    // this.$message.error({
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