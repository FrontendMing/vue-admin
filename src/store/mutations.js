import * as types from './mutations-types'
import { type } from 'os'

const common = {
  [types.UPDATE_DOCUMENT_CLIENT_HEIGHT] (state, height){
    state.common.documentClientHeight = height
  },
  [types.UPDATE_SIDEBAR_FOLD] (state, fold){
    state.common.sidebarFold = fold
  },
  [types.UPDATE_MENU_ACTIVE_NAME] (state, name){
    state.common.menuActiveName = name
  },
  [types.UPDATE_MAIN_TABS] (state, tabs){
    state.common.mainTabs = tabs
  },
  [types.UPDATE_MAIN_TABS_ACTIVE_NAME] (state, name){
    state.common.mainTabsActiveName = name
  },
  updateMenuList (state, list) {
    state.menuList = list
  },
  resetStore(state){
    state.user = {}
  }
}

export default {
  ...common,
  
}
