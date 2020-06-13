import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'
import UserAdd from '../views/Home/Subs/UserAdd/UserAdd'
import UserSearch from '../views/Home/Subs/UserSearch/UserSearch'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/Home/UserAdd',
        name: 'HomeUserAdd',
        component: UserAdd,

      },
      {
        path: '/Home/UserSearch',
        name: 'HomeUserSearch',
        component: UserSearch,

      },
    ],
    redirect: '/Home/UserSearch',
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
