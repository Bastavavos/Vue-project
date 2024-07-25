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

  <div class="flex justify-center mt-10 mb-10">
      <h1 class="title text-2xl m-10 font-pop">BEST SELLERS</h1>
  </div>
  <div class="container">
    <div class="flex justify-center mb-12">
      <div class="wrapper">
        <ProductCard v-for="product in best.randomProducts" :key="product.id" :product="product"/>
      </div>
    </div>
  </div>

</template>

<style scoped>
.wrapper {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3,minmax(0,1fr));
  grid-auto-rows: auto;
}

.container {
  margin: 0 auto;
  max-width: 1490px;
  padding-left: 27px;
  padding-right: 27px;
  -webkit-transition: padding .4s ease-in-out;
  transition: padding .4s ease-in-out;
}
</style>

