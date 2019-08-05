import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 导入vue-lazyload
import VueLazyload from 'vue-lazyload'
// 导入element-ui
import ElementUI from 'element-ui'
import './common/sass/element-variables.scss'
import 'common/sass/base.scss'
// 导入vuex

Vue.use(VueLazyload, {
  loading: require('common/images/default.png')
})

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
