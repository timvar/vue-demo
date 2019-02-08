import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyPage from './views/MyPage.vue'
import Calculator from './views/Calculator.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mypage',
      name: 'mypgage',
      component: MyPage
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculator
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
