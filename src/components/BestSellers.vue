<script>
import ProductCard from "@/components/ProductCard.vue";
import {usehttpStore} from "@/stores/httpstore.js";
import {onMounted} from "vue";

export default {
  components: {ProductCard},
  setup() {
    const best = usehttpStore();
    onMounted(() => {
      best.getRandomProducts();
    })
    return {best};
  }
}
</script>
<template>

  <hr class="xl:w-full mt-5">
  <div class="flex justify-center mt-5 mb-10">
      <h1 class="title text-2xl m-10 font-pop">BEST SELLERS</h1>
  </div>
  <div class="container">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center">
        <ProductCard v-for="product in best.randomProducts" :key="product.id" :product="product"/>
      </div>
  </div>

</template>

<style scoped>

.container {
  margin: 0 auto;
  max-width: 1490px;
  padding-left: 27px;
  padding-right: 27px;
  -webkit-transition: padding .4s ease-in-out;
  transition: padding .4s ease-in-out;
}
</style>

