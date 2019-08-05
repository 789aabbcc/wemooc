import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Test from '../screen/test'
import Home from '../screen/home/index'
import Class from '../screen/class/class'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'tab-item-active',
  routes: [

    {
      path: '/rank',
      component: Test
    },
    {
      path: '/class',
      component: Class
    },
    {
      path: '/',
      component: Home
    }
  ]
})

export default router
