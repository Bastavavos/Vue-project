<script>
import {usehttpStore} from "@/stores/httpstore.js";
import {useItemsStore} from "@/stores/cart.js";

export default {
  setup() {
    const store = usehttpStore()
    const itemsStore = useItemsStore();
    return {store, itemsStore}
  },
  data() {
    return {
      isDarkTheme: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      document.documentElement.classList.toggle('dark-theme');
    },
  },
}

</script>

<template>

  <div class="navbar font-pop">
    <div class="navbar-start">
      <div class="flex align-items-center pr-5">
        <button @click="toggleTheme">
          <i-ph-moon v-if="!isDarkTheme"></i-ph-moon>
          <i-ph-sun v-else></i-ph-sun>
        </button>
      </div>
      <div class="dropdown z-20">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <!--          use auto import icon-->
          <i-ph-list class="h-5 w-5"></i-ph-list>
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>-->
        </div>

        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white w-52 rounded">
          <li><RouterLink to="/">HOME</RouterLink></li>
          <li><RouterLink to="/shop">SHOP</RouterLink></li>
          <li><RouterLink to="/sign-up">SIGN UP</RouterLink></li>
          <li><RouterLink to="/user-account">MY ACCOUNT</RouterLink></li>
          <li><RouterLink to="/about">ABOUT</RouterLink></li>
          <li><RouterLink to="/"> <button @click="store.logout">LOG OUT</button></RouterLink></li>
        </ul>
      </div>
      <RouterLink to="/">
        <h1 class="text-xl font-ryman">CraftedBy.</h1>
        <!--        <img src="/src/assets/Crafted_Logo.webp" alt="logo">-->
      </RouterLink>
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/">HOME</RouterLink></li>
        <li><RouterLink to="/shop">SHOP</RouterLink></li>
        <li><RouterLink to="/sign-up">SIGN UP</RouterLink></li>
        <li><RouterLink to="/user-account">MY ACCOUNT</RouterLink></li>
        <li><RouterLink to="/about">ABOUT</RouterLink></li>
        <li><RouterLink to="/"> <button @click="store.logout">LOG OUT</button></RouterLink></li>
      </ul>
    </div>

    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <RouterLink to="/sign-in">
<!--          use auto import icons-->
          <i-ph-user class="h-5 w-5"></i-ph-user>
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>-->
        </RouterLink>
      </button>
      <div class="">
        <button class="btn btn-ghost btn-circle">
          <RouterLink to="/user-cart" class="flex items-center space-x-2">
            <span class="font-semibold">{{ itemsStore.cartItemCount }}</span>
            <i-ph-bag class="h-5 w-5"></i-ph-bag>
          </RouterLink>
        </button>
      </div>
    </div>
  </div>

</template>

<style scoped>
.navbar {
/*  background-color: rgba(245,151,148,1%);*/
  border-bottom: rgba(0, 0, 0, 0.1) solid 1px;
}
h1 {
  color: #56b280;
}
</style>