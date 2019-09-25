import Vue from 'vue'
import Router from 'vue-router'
import { clearLoginInfo } from '@/utils'

Vue.use(Router)

// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)

// 全局路由(无需嵌套上左右整体布局)
const globalRoutes = [
  { path: '/404', component: _import('common/404.vue'), name: '404', meta: { title: '404未找到' } },
  { path: '/login', component: _import('common/Login.vue'), name: 'login', meta: { title: '登录' } }
]

// 主入口路由(需嵌套上左右整体布局)
const mainRoutes = {
  path: '/',
  component: () => import('@/layout'),
  name: 'layout',
  redirect: { name: 'home' },
  meta: { title: '主入口整体布局' },
  children: [
    // 通过meta对象设置路由展示方式
    // 1. isTab: 是否通过tab展示内容, true: 是, false: 否
    // 2. iframeUrl: 是否通过iframe嵌套展示内容, '以http[s]://开头': 是, '': 否
    // 提示: 如需要通过iframe嵌套展示内容, 但不通过tab打开, 请自行创建组件使用iframe处理!
    { path: '/home', component: _import('Home'), name: 'home', meta: { title: '首页' } },
    { path: '/addActivity', component: _import('Activity/Add'), name: 'addActivity', meta: { title: '添加活动', isTab: true } },
    { path: '/activityList', component: _import('Activity/List'), name: 'activityList', meta: { title: '活动列表', isTab: true } },
    { path: '/redPocketRecord', component: _import('Activity/views/RedPocketRecord'), name: 'redPocketRecord', meta: { title: '红包记录', isTab: true } },
    { path: '/staffData', component: _import('Activity/views/StaffData'), name: 'staffData', meta: { title: '员工数据', isTab: true } },
    { path: '/qrcodeList', component: _import('Qrcode/List'), name: 'qrcodeList', meta: { title: '我的二维码', isTab: true } },
    { path: '/account', component: _import('Account'), name: 'account', meta: { title: '账号管理', isTab: true } },
  ],
  beforeEnter (to, from, next) {
    let token = sessionStorage.getItem('token')
    if (!token) {
      clearLoginInfo()
      next({ name: 'login' })
    }
    next()
  }
}

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
  routes: globalRoutes.concat(mainRoutes)
})

export default router

