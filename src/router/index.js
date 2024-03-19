import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/HomePage.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Product/Shop.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About/AboutPage.vue')
    },
    {
      path: '/product/:id',
      name: 'product/:id',
      component: () => import('../views/Product/ProductDetails.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../components/Connection.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../components/Inscription.vue')
    },
    {
      path: '/user-account',
      name: 'user-account',
      component: () => import('../views/User/UserAccount.vue')
    },
    {
      path: '/user-cart',
      name: 'user-cart',
      component: () => import('../views/User/UserCart.vue')
    }
  ]
})

export default router
