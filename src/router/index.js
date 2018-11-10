import Vue from 'vue'
// npm install vue-router 安装了 vue-router
import VueRouter from 'vue-router'
import helloWorld from '@/components/HelloWorld'
import headerView from '@/views/demo/components/header'

// 通过 Vue.use() 明确地安装路由功能
Vue.use(VueRouter)


// 撰写路由规则
export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'headerView',
            component: headerView,
        },
        {
            path: '/hello',
            name: 'helloWorld',
            component: helloWorld,
        }
    ]
})
