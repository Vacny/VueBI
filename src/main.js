// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import axios from './axios'
import store from "./store"
import qs from "qs"
//自动全局注册组件
import './components/global.js'

import {Loading} from "vux"

Vue.config.productionTip = false


Vue.component('loading', Loading)

Vue.prototype.$qs = qs
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts


//从app获取数据
window.document.addEventListener("message", function (event) {
  if (JSON.parse(event.data).data && store.state.token != JSON.parse(event.data).data) {
    store.state.token = JSON.parse(event.data).data; //
    store.state.isLock = false
  }
}, false);

store.state.load = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});


