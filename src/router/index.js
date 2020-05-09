import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SitemapPage from '../views/SitemapPage.vue'
import AboutPage from '../views/AboutPage.vue'
import BlogDetailPage from '../views/BlogDetailPage.vue'
import GuestBookPage from '../views/GuestBookPage.vue'

import AdminPage from '../views/AdminPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Sitemap',
    name: 'Sitemap',
    component: SitemapPage
  },
  {
    path: '/About',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/BlogDetail',
    name: 'BlogDetail',
    component: BlogDetailPage
  },
  {
    path: '/GuestBook',
    name: 'GuestBook',
    component: GuestBookPage
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: AdminPage
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
