<script>
import {usehttpStore} from "@/stores/httpstore.js";
import {useItemsStore} from "@/stores/cart.js";
import {computed} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

export default {
  setup() {
    const store = usehttpStore()
    const itemsStore = useItemsStore();
    const isAuthenticated = computed(() => !!store.user);
    const router = useRouter();
    return {store, itemsStore, isAuthenticated, router}
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
    async logoutAction() {
      let logout
      const httpStore = usehttpStore()
      let token = httpStore.token
      logout = await httpStore.logout(token);
      console.log(logout);
      await this.router.push('/');
    }
  },
}
</script>

<template>
<div class="navbar font-pop fixed z-50" :class="{'bg-white': !isDarkTheme, 'bg-black': isDarkTheme}">
  <div class="navbar-start">
    <div class="flex align-items-center pr-5">
      <button @click="toggleTheme">
        <i-ph-moon v-if="!isDarkTheme"></i-ph-moon>
        <i-ph-sun v-else></i-ph-sun>
      </button>
    </div>
    <div class="dropdown z-20">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <i-ph-list class="h-5 w-5"></i-ph-list>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white w-52 rounded">
        <li><RouterLink to="/">HOME</RouterLink></li>
        <li><RouterLink to="/about">ABOUT</RouterLink></li>
        <li><RouterLink to="/shop">SHOP</RouterLink></li>
        <li><RouterLink to="/user-account">MY ACCOUNT</RouterLink></li>
        <li><RouterLink to="/sign-in">SIGN-IN</RouterLink></li>
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
      <li><RouterLink to="/about">ABOUT</RouterLink></li>
      <li><RouterLink to="/shop">SHOP</RouterLink></li>
      <li><RouterLink to="/sign-up">SIGN UP</RouterLink></li>
      <li><RouterLink to="/user-account">MY ACCOUNT</RouterLink></li>
    </ul>
  </div>
  <div class="navbar-end">
    <RouterLink to="/sign-in" v-if="!isAuthenticated">
    <button class="btn btn-ghost flex flex-row">
      <i-ph-SignIn class="h-5 w-5 mr-1"></i-ph-SignIn>
      <div>SIGN IN</div>
    </button>
    </RouterLink>
      <button v-else @click="logoutAction" class="btn btn-ghost flex flex-row">
        <i-ph-power class="h-4 w-4 mr-1"></i-ph-power>
<!--        <RouterLink to="/">-->
        <div>LOG OUT</div>
<!--        </RouterLink>-->
      </button>

    <div>
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