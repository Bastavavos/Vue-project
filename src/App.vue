<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header/>
  <transition
      enter-from-class="opacity-0"
      enter-active-class="transition-opacity duration-500"
      leave-from-class="opacity-100"
      leave-active-class="transition-opacity duration-500">
  <RouterView/>
  </transition>
  <Footer/>
</template>

<style scoped>
</style>
