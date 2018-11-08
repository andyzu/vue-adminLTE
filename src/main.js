// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// npm install vue-router 安装了 vue-router
import VueRouter from 'vue-router'
//import helloWorld from './components/HelloWorld'
import headerView from './views/demo/components/header'


// 通过 Vue.use() 明确地安装路由功能
Vue.use(VueRouter)

Vue.config.productionTip = false


// 撰写路由规则
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'headerView',
            component: headerView,
        }
    ]
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
