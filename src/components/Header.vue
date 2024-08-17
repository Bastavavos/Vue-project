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
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow w-52 rounded" :class="{'bg-white': !isDarkTheme, 'bg-black': isDarkTheme}">
        <li><RouterLink to="/">HOME</RouterLink></li>
        <li><RouterLink to="/shop">SHOP</RouterLink></li>
        <li><RouterLink to="/artisan-space">ARTISAN</RouterLink></li>
        <li><RouterLink to="/user-account">MY ACCOUNT</RouterLink></li>
      </ul>
    </div>
    <RouterLink to="/">
      <h1 class="text-xl font-ryman">CraftedBy.</h1>
    </RouterLink>
  </div>
  <div class="navbar-center hidden lg:flex">
    <div class="menu menu-horizontal px-1">
      <button class="btn btn-ghost"><RouterLink to="/">HOME</RouterLink></button>
      <button class="btn btn-ghost"><RouterLink to="/shop">SHOP</RouterLink></button>
      <button class="btn btn-ghost"><RouterLink to="/artisan-space">ARTISAN</RouterLink></button>
      <button class="btn btn-ghost" v-if="isAuthenticated"><RouterLink to="/user-account">MY ACCOUNT</RouterLink></button>
      <button class="btn btn-ghost" v-else ><RouterLink to="/sign-in">MY ACCOUNT</RouterLink></button>
    </div>
  </div>

  <div class="navbar-end hidden lg:flex">
    <RouterLink to="/sign-in" v-if="!isAuthenticated">
    <button class="btn btn-ghost flex flex-row">
      <i-ph-SignIn class="h-5 w-5 mr-1"></i-ph-SignIn>
      <div>SIGN IN</div>
    </button>
    </RouterLink>
      <button v-else @click="logoutAction" class="btn btn-ghost flex flex-row">
        <i-ph-power class="h-4 w-4 mr-1"></i-ph-power>
        <div>LOG OUT</div>
      </button>
    <div>|</div>
    <button class="btn btn-ghost">
      <RouterLink to="/sign-up">SIGN UP</RouterLink>
    </button>

    <RouterLink to="/user-cart" class="flex items-center pl-5">
      <span class="font-semibold">{{ itemsStore.cartItemCount }}</span>
      <button class="btn btn-ghost btn-circle">
        <i-ph-bag class="h-5 w-5"></i-ph-bag>
      </button>
    </RouterLink>
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