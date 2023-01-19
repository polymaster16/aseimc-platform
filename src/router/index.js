import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActivitiesView from '../views/ActivitiesView.vue'
import BlogView from '../views/BlogView.vue'
import ShopView from '../views/ShopView.vue'
import NewBlogPostView from '../views/NewBlogPost.vue'
import PlayGroundView from '../views/PlayGround.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/activities',
    name: 'activities',
    component: ActivitiesView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },
  {
    path: '/new-blog',
    name: 'new-blog',
    component: NewBlogPostView
  },
  {
    path: '/play',
    name: 'play',
    component: PlayGroundView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
