/*
 * @Author: your name
 * @Date: 2021-01-27 11:34:15
 * @LastEditTime: 2021-01-30 20:32:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'

//导入全局样式
import '../assets/css/global.css'

//注册路由组件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        // 这 Home 组件里展示 Welcome 子组件
        path: '/welcome',
        component: Welcome
      },
      { path: '/users', component: Users },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫，to 表示将要访问的路径，from 表示从哪里来，next 是下一个要做的操作
router.beforeEach((to, from, next) => {
  // to 要访问的路径
  // from 从哪里来的
  //next() 直接放行， next('/login) 表示跳转
  //要访问/login 的话直接就放行
  if (to.path === '/login') return next()
  const tokenStar = window.sessionStorage.getItem('token')
  // token 不存在哪就直接跳转到登录页面
  if (!tokenStar) return next('/login')
  //否则 token 存在那就放行 【正常这里应该有个校验 TOKEN 有效的一个接口， 或者通过后续的响应拦截器去做】
  next()
})

export default router
