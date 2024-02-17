import { createRouter, createWebHistory } from 'vue-router'
import BlogHomeView from '../views/BlogHomeView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: BlogHomeView
  },
  {
    path: '/posts/:id',
    name: 'post',
    component: BlogPostView,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
