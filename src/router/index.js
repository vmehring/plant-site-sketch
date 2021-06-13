import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlantListBuilder from '../views/PlantListBuilder.vue'
import Conifers from '../views/Conifers.vue'
import Broadleafs from '../views/Broadleafs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PlantListBuilder',
    name: 'PlantListBuilder',
    component: PlantListBuilder
  },
  {
    path: '/Conifers',
    name: 'Conifers',
    component: Conifers
  },
  {
    path: '/Broadleafs',
    name: 'Broadleafs',
    component: Broadleafs
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
