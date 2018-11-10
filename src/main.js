// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 这里加载我们自定义的 router 文件
import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router, // 这里是要把 router 对象注入到 vue 实例中
    components: {App},
    template: '<App/>'
})
