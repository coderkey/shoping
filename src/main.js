import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// 1. 引入配置FastClick的js文件
import './plugins/fastClick'

// 2. 引入全局样式
import './style/commen.less'

// 3. 引入全局UI组件库
import './plugins/vant'

// 4. 引入rem
import './config/rem'

// 5. 引入全局过滤器
import './config/filters'

// 6. 配置二维码插件
import VueQriously from "vue-qriously/dist/vue-qriously";

Vue.use(VueQriously)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
