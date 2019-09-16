import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context('./global', true, /\w+\.vue$/)

requireComponent.keys().forEach(component => {
  // 获取组件配置
  const componentConfig = requireComponent(component)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      component.split('/').pop().replace(/\.\w+$/, '')
    )
  )

  // 全局注册组件
  Vue.component( 
    componentName, 
    componentConfig.default || componentConfig 
  )
})