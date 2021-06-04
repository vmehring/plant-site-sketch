import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlantListBuilder from '../views/PlantListBuilder.vue'
import Placeholder1 from '../views/Placeholder1.vue'
import Placeholder2 from '../views/Placeholder2.vue'

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
    path: '/Placeholder1',
    name: 'Placeholder1',
    component: Placeholder1
  },
  {
    path: '/Placeholder2',
    name: 'Placeholder2',
    component: Placeholder2
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
