<script>
import ProductCard from "@/components/ProductCard.vue";
import {usehttpStore} from "@/stores/httpstore.js";
import {onMounted} from "vue";

export default {
  components: {ProductCard},
  setup() {
    const shop = usehttpStore();

    onMounted(() => {
      shop.getProducts();
    })

    return {shop};
  }
}
</script>

<template>

  <div class="flex justify-center">
    <h1 class="title text-2xl mt-10">SHOP</h1>
  </div>

  <div class="flex justify-center">
    <select class="select select-bordered w-40 m-5">
      <option disabled selected>Categories</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>

  <div class="container">
    <div class="flex justify-center">
      <div class="wrapper">
        <ProductCard v-for="product in shop.products" :key="product.id" :product="product"/>
      </div>
    </div>
  </div>

</template>

<style scoped>
.wrapper {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
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

