/*
 * @Author: your name
 * @Date: 2021-01-27 11:34:15
 * @LastEditTime: 2021-01-29 14:27:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

//导入字体图标
import './assets/css/global.css'

//导入全局样式
import './assets/fonts/iconfont.css'

// 导入 axios 以发送 ajax 请求 src/main.js
import axios from 'axios'
// 设置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

//请求拦截器
axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

// 无效 token 的处理 响应拦截器
axios.interceptors.response.use((res) => {
  if (res.data.meta.msg === '无效token' && res.data.meta.status === 400) {
    location.href = '/#/login'
  }
  return res
})
Vue.prototype.$http = axios

//阻止启动生产消息，常用作指令。
Vue.config.$productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
