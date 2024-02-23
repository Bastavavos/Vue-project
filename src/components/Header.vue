<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from "@/views/Home/HomePage.vue";
</script>

<template>

  <div class="navbar bg-base-100 font-dm">
    <div class="navbar-start">
      <div class="dropdown z-20">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <!--          use auto import icon-->
          <i-ph-list class="h-5 w-5"></i-ph-list>
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>-->
        </div>

        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
          <li><RouterLink to="/">HOME</RouterLink></li>
          <li><RouterLink to="/shop">SHOP</RouterLink></li>
          <li><RouterLink to="/sign-up">SIGN UP</RouterLink></li>
          <li><RouterLink to="/user-account">MY ACCOUNT</RouterLink></li>
          <li><RouterLink to="/about">ABOUT</RouterLink></li>
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
      <button class="btn btn-ghost btn-circle">
        <RouterLink to="/user-cart">
          <i-ph-bag class="h-5 w-5"></i-ph-bag>
<!--        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="80" cy="216" r="16"/><circle cx="184" cy="216" r="16"/><path d="M42.29,72H224l-28.52,92.71A16,16,0,0,1,180.18,176H84.07a16,16,0,0,1-15.39-11.6L32.51,37.8A8,8,0,0,0,24.82,32H8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>-->
        </RouterLink>
      </button>
    </div>
  </div>

</template>

<style scoped>
.navbar {
/*  background-color: rgba(245,151,148,1%);*/
  border-bottom: #000000 solid 1px;
}
</style>