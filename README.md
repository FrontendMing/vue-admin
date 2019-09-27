## vue-admin-learning

## 项目简介
基于vue的后台管理系统，借鉴其它优秀的开源项目，学习从0到1的搭建系统的开发环境

## 脚手架版本:
*vue-cli@3
这个版本极大的精简了项目目录，整个项目非常清爽

## 用到vue相关的生态链模块:
  * `vue`
  * `vue-router`
  * `vuex`
  * `axios`
  * `element-ui`

## 项目要点
  * `自定义主题色配置、element-ui组件按需加载`
  * `路由懒加载`
  * `全局组件自动注册`
  * `vuex状态管理`
  * `全局数据请求拦截处理及loading`
  * `用ES6的async和await解放回调地狱`
  * `单个、多个代理配置`
  * ···

### 项目结构

```javascript
├── src                         项目主文件目录
│   ├── api                     请求接口管理
│   │   └── ...
│   ├── assets                  图片和样式
│   │   └── ...
│   ├── components              组件
│   │   └── ...
│   ├── layout                  项目基础布局
│   │   └── ...
│   ├── plugins                 按需加载element-ui组件
│   │   └── xxx.js
│   ├── request                 axios请求拦截封装
│   │   └── xxx.js
│   ├── router                  路由配置
│   │   ├── xxx.js
│   │   └── ...
│   ├── store                   vuex目录
│   │   ├── actions.js
│   │   ├── getters.js
│   │   └── index.js            store入口
│   │   ├── mutations.types.js
│   │   ├── mutations.js
│   │   ├── state.js
│   ├── utils                   工具
│   │   └── xxx.js
│   │   └── ...
│   └── views                   页面目录
│       ├── common          
│       │   ├── 404.vue
│       │   ├── Login.vue
│       │   └── ...
│       └── xxx
│           ├── xxx.vue
│           └── ...
└── package.json
```

## 项目启动步骤
1. 安装包
   yarn install 
2. 开发运行
   yarn run serve
3. 生产打包
   yarn run build

### Lints and fixes files
```
yarn run lint
```
