import { createRouter, createWebHistory } from 'vue-router'
import ProductDetails from "@/views/Product/ProductDetails.vue";

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
      path: '/artisan',
      name: 'artisan',
      component: () => import('../views/User/Artisan.vue')
    },
    {
      path: '/product/:id',
      name: 'product-details',
      component: () => import('../views/Product/ProductDetails.vue'),
      // component: ProductDetails,
      // props: true,
    },
    {
      path: '/artisan/:id',
      name: 'artisan-details',
      component: () => import('../views/User/ArtisanDetails.vue'),
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
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/User/Checkout.vue')
    },
    {
      path: '/artisan-space',
      name: 'artisan-space',
      component: () => import('../views/User/ArtisanPersonalSpace.vue')
    },
    {
      path: '/artisan/product/create',
      name: 'create-product',
      component: () => import('../views/Product/CreateProduct.vue')
    }
  ]
})

export default router
