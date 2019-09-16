import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import http from '@/request'
import '@/components'
import './plugins/element.js'
import '@/assets/style/index.scss'

Vue.config.productionTip = false

// 非生产环境, 适配mockjs模拟数据
// if (process.env.NODE_ENV !== 'production') {
//   require('@/mock')
// }

// 挂载全局
Vue.prototype.$http = http // ajax请求方法
// Vue.prototype.isAuth = isAuth // 权限方法

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
