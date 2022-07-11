import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import toyApp from '../views/toy-app.vue'
import toyEdit from '../views/toy-edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',name: 'home',component: home},
    {path: '/toy',name: 'toy-app',component: toyApp},
    {path: '/toy/edit/:id?',name: 'toy-edit',component: toyEdit,},
    // {path: '/toy/:id',name: 'toy-details',component: toyDetails,},
  ]
})

export default router
