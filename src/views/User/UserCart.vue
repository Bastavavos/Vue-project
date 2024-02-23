<script setup>
import {useItemsStore} from "@/stores/store.js";
const itemStore = useItemsStore()
import ProductCard from "@/components/ProductCard.vue";
</script>

<template>

  <div class="flex justify-center font-ryman">
    <h1 class="title text-2xl m-10">My Cart</h1>
  </div>

  <div class="container">
    <div class="flex justify-center">
      <div class="wrapper">
        <ProductCard v-for="product in itemStore.items" :key="product.id" :product="product"/>
        <button  @click="itemStore.removeItem(product)" class="btn text-white mb-2 font-dm">DELETE</button>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl mb-10 mt-5 font-dm">
      <div class="card-body items-center text-center p-2">
        <h2 class="card-title">Total</h2>
        <div class="card-actions">
          <button class="btn text-white mb-2 mt-28">CONFIRM & PAY</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.card {
  border-radius: unset;
  border: solid 1px;
}
.wrapper {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2,minmax(0,1fr));
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
.btn {
  border-radius: unset;
  background-color: black;
}

</style>

<script>
export default {
  props:{
    product: Object,
  },
};
</script>