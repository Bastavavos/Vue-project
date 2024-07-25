<script>
import {useItemsStore} from "@/stores/cart.js";

export default {
  props: {
    product: Object,
  },
  setup() {
    const itemStore = useItemsStore();
    return {
      itemStore,
    };
  },
}
</script>

<template>
  <div class="card shadow-lg mb-1 font-pop ml-2 mr-3">
    <RouterLink :to="`/product/${product.id}`">
      <figure class="img p-4">
        <img :src="product.image" alt="Product" class="h-32 w-28">
      </figure>
    </RouterLink>
    <div class="card-body items-center text-center p-2">
      <h2 class="card-title">{{product.name}}</h2>
      <p class="font-medium place-items-start pt-2">{{ product.price }} $</p>
      <div class="flex flex-row space-x-2">
        <p class="pt-2">Quantity :</p>
        <p class="pt-2"> {{ product.quantity }}</p>
      </div>
    </div>
  </div>

</template>

<style scoped>
.btn2 {
  border-radius: unset;
  border-color: #56b280;
  color: #56b280;
}
.btn-ghost{
  border: unset;
}
</style>