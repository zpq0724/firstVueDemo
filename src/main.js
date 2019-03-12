// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"

import VueJsonp from "vue-jsonp" //获取jsonp的接口数据，下载json-p，并且在入口文件中引入和使用。
Vue.use(VueJsonp) 


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//引入滚动事件的js
import "./module/module"

Vue.use(MintUI)
Vue.prototype.$http=axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  components: { App },
  template: '<App/>'
})
