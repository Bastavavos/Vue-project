<script setup>
import {RouterLink} from "vue-router";
</script>

<template>

  <div>
    <div class="flex justify-center items-center">
      <img src="/src/assets/LandingCrafted.webp" alt="CraftedBy SHOP NOW bg">
      <!--    <img src="https://www.cma77.fr/uploads/_crma_77/actualite/adobestock-374274031.jpeg" alt="Craft"/>-->

      <div class="card-body absolute z-10 rounded bg-white/80 text-center">
        <h1 class="font-pop text-black text-2xl">
          The know-how
        </h1>
        <h1 class="font-pop text-black text-2xl">
          of Artisans
        </h1>
        <button class="btn font-robo hover: text-white mr-7 ml-7 mt-4">
          <RouterLink to="/shop">Discovery our collection</RouterLink>
        </button>
      </div>

    </div>
  </div>

</template>


<style scoped>

.btn {
  border: unset;
  border-radius: 5px;
  background-color: #56b280;
}

</style>