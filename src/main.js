import 'common/sass/base.scss'

import Vue from 'vue'

import App from './App.vue'
// 导入路由
import router from './router'
//导入 store
import store from './store/index'

// 导入vue-lazyload
import VueLazyload from 'vue-lazyload'
// 导入element-ui
import ElementUI from 'element-ui'
import './common/sass/element-variables.scss'

// 导入fastClick
import FastClick from 'fastclick'

import VueDPlayer from 'vue-dplayer'

// 导入vuex
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body)
    }, false)
}

Vue.use(VueLazyload, {
    loading: require('common/images/default.png')
})
Vue.use(VueDPlayer)

Vue.use(router)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store

}).$mount('#app')
