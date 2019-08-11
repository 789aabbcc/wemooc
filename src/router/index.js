import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

// 导入组件
import Test from '../screen/test'
import Home from '../screen/home/index'
import Class from '../screen/class/class'
import ClassPay from '../screen/class/class-pay'
import ClassDetail1 from '../screen/class/class-detail1'
import Video from '../screen/video/video'
import ClassDetail2 from '../screen/class/class-detail2'
import SingleOrder from '../screen/single-order/single-order'

// class子路由

import ClassDetailD from '../components/class/class-detail-d'
import ClassDetailI from '../components/class/class-detail-i'
import ClassDetailC from '../components/class/class-detail-c'

const Home2 = resolve => {
    import('../screen/home/index').then(module => {
        resolve(module)
    })
}
const Class2 = resolve => {
    import('../screen/class/class').then(module => {
        resolve(module)
    })
}

Vue.use(VueRouter)

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
            path: '/',
            component: Home
        }
    ]
})

// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   next()
// })
//
// router.afterEach((to, from, next) => {
//   NProgress.done()
// })

export default router
