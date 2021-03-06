import Vue from 'vue'
import App from './App'
import {post,get} from './config/request.js'

Vue.config.productionTip = false

Vue.prototype.$get = get
Vue.prototype.$post = post
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
