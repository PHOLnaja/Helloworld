import Vue from 'vue'
import Router from 'vue-router'

import Full from '@/contianer/Full'
import Hello from '@/components/Hello'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'Main',
    component: Full,
    children: [{
      path: '/',
      name: 'Hello',
      component: Hello
    }]
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    component: Hello
  }
  ]
})
