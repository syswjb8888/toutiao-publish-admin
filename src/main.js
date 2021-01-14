/**
 * 项目启动入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.less'
// 加载 element 组件库
import ElementUI from 'element-ui'
// 加载 element 组件库样式
import 'element-ui/lib/theme-chalk/index.css'

// 全局注册 element 组件库（就可以使用了）
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
