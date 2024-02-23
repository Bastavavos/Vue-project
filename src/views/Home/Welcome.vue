<script setup>
import {RouterLink} from "vue-router";
</script>

<template>

<div>
  <div class="flex justify-center items-center">
    <img src="/src/assets/LandingCrafted.webp" alt="CraftedBy SHOP NOW bg">
<!--    <img src="https://www.cma77.fr/uploads/_crma_77/actualite/adobestock-374274031.jpeg" alt="Craft"/>-->
    <button class="btn absolute z-10 font-dm animate-pulse hover: text-white" ><RouterLink to="/shop">SHOP NOW</RouterLink></button>
  </div>
</div>

</template>

<style scoped>

.btn {
  border-radius: unset;
  background-color: unset;
}

</style>