import * as types from './mutations-types'
// import { resolve } from "any-promise"

const common = {
  // 重新计算窗口高度
  updateDocumentClientHeight ({ commit }, data) {
    commit(types.UPDATE_DOCUMENT_CLIENT_HEIGHT, data)
  },
  // 更新菜单 折叠 | 展开 状态
  updateSidebarFold ({ commit }, data) {
    commit(types.UPDATE_SIDEBAR_FOLD, data)
  },
  // 更新菜单 active
  updateMenuActiveName({ commit }, data) {
    commit(types.UPDATE_MENU_ACTIVE_NAME, data)
  },
  // 更新路由 mainTabs 
  updateMainTabs ({ commit }, data) {
    commit(types.UPDATE_MAIN_TABS, data)
  },
  updateMainTabsActiveName ({ commit }, data){
    commit(types.UPDATE_MAIN_TABS_ACTIVE_NAME, data)
  },
}

export default {
  ...common,
  // buyVip({ commit }, e) {
  //   return new Promise((resolve, reject) => {
  //     // mock api 交互
  //     setTimeout(() => {
  //       // 修改本地state
  //       commit("setMemberInfo", {
  //         userStatus: e.userStatus,
  //         vipLevel: e.vipLevel
  //       })
  //       resolve("购买成功")
  //     }, 1000)
  //   })
  // },
}
