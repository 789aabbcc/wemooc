import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Rank from '../screen/home/index'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'tab-item-active',
  routes: [
    {
      path: '/',
      redirect: '/rank'
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})

export default router
