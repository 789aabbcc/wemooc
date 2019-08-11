import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 这个样式必须引入
import '../common/sass/base.scss'

// 导入组件
import Test from '../screen/test'
import Home from '../screen/home/index'
import Class from '../screen/class/class'
import ClassPay from '../screen/class/class-pay'
import ClassDetail1 from '../screen/class/class-detail1'
import Video from '../screen/video/video'
import ClassDetail2 from '../screen/class/class-detail2'
import SingleOrder from '../screen/single-order/single-order'
import Login from '../screen/first/Login' // 登录
import Register from '../screen/first/Register' // 注册
import Changepassword from '../screen/first/Changepassword' // 修改密码
import Mycenter from '../screen/my/Mycenter' // 个人中心

// class子路由

import ClassDetailD from '../components/class/class-detail-d'
import ClassDetailI from '../components/class/class-detail-i'
import ClassDetailC from '../components/class/class-detail-c'

Vue.use(VueRouter)

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false})

const router = new VueRouter({
  mode: 'history', // 路由模式
  linkActiveClass: 'tab-item-active',
  routes: [

    {
      path: '/rank',
      component: Test
    },
    {
      path: '/single-order',
      component: SingleOrder
    },

    {
      path: '/class/free',
      component: Class
    },
    {
      path: '/class/pay',
      component: ClassPay
    },
    {
      path: '/class-detail/free',
      component: ClassDetail1,
      redirect: '/class-detail/free/detail',
      children: [
        { path: 'detail', component: ClassDetailD },
        { path: 'index', component: ClassDetailI },
        { path: 'comment', component: ClassDetailC }
      ]
    },
    {
      path: '/class-detail/pay',
      component: ClassDetail2,
      // redirect: '/class-detail/pay/detail',
      children: [
        { path: 'detail', component: ClassDetailD },
        { path: 'index', component: ClassDetailI },
        { path: 'comment', component: ClassDetailC }
      ]
    },
    {
      path: '/class-detail/video',
      component: Video
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/reset',
      component: Changepassword
    },
    {
      path: '/center',
      component: Mycenter
    },
    {
      path: '/',
      component: Home
    }
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
  NProgress.done()
})

// router.beforeEach((to, from, next) => {

// })
//
// router.afterEach((to, from, next) => {
NProgress.done()
// })

export default router
