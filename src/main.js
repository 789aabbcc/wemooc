import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'

// 导入vue-lazyload
import VueLazyload from 'vue-lazyload'

// 导入vuex

Vue.use(VueLazyload, {
  loading: require('common/images/default.png')
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
