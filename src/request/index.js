import axios from 'axios'
<<<<<<< HEAD
import store from '@/store'

const http = {}
const baseUrl = process.env.NODE_ENV === 'production' ? '/' : '/api'

var instance = axios.create({
  timeout: 5000,
  baseUrl,
=======
import qs from 'qs'
import store from '@/store'

const http = {}
const baseUrl = '/'

let instance = axios.create({
  timeout: 5000,
  baseUrl: baseUrl,
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
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
<<<<<<< HEAD
    if (store.state.UserToken) {
      config.headers.Authorization = `${store.state.UserToken}`
    }
=======
    if (sessionStorage.getItem('token')) {
      config.headers.token = sessionStorage.getItem('token')
    }
    config.data = config.data && qs.stringify(config.data)
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
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
  if (!options || options.isShowLoading !== false) {
    loading = document.getElementById('ajaxLoading')
    loading.style.display = 'block'
  }
<<<<<<< HEAD
  return new Promise((resolve, reject) => {
    instance
      .get(url, options)
      .then(response => {
        if (!options || options.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading')
          loading.style.display = 'none'
        }
        if (response.code === 0) {
          resolve(response.data)
        } else {
          this.$message.error({
            message: response.msg
          })
          reject(response.msg)
        }
      })
      .catch(e => {
        console.log(e)
      })
  })
=======
  return instance.get(url, options)
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
}

http.post = function (url, data, options) {
  let loading
<<<<<<< HEAD
  if (!options || options.isShowLoading !== false) {
    loading = document.getElementById('ajaxLoading')
    loading.style.display = 'block'
  }
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, options)
      .then(response => {
        if (!options || options.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading')
          loading.style.display = 'none'
        }
        if (response.code === 0) {
          resolve(response.data)
        } else {
          this.$message.error({
            message: response.msg
          })
          reject(response.message)
        }
      })
      .catch(e => {
        console.log(e)
      })
  })
=======
  // if (!options || options.isShowLoading !== false) {
  //   loading = document.getElementById('ajaxLoading')
  //   loading.style.display = 'block'
  // }
  return instance.post(url, data, options)
>>>>>>> 33a693a0674ff4e5515db10f0e09309c959ae318
}

export default http