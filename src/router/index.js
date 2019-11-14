import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import Login from 'pages/Login'
import Logout from 'pages/Logout'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/logout',
    component: Logout
  },
  {
    path: '/login',
    component: Login
  }
]

export default new Router({
  routes
})
