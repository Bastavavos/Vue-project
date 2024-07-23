<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Header/>
  <RouterView class="pt-16"/>
  <Footer/>
</template>

<style scoped>
</style>
