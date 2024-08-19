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
        <img :src="product.image" alt="Product" class="object-cover">
      </figure>
    </RouterLink>
    <div class="card-body items-center text-center p-2">
      <h2 class="card-title">{{product.name}}</h2>
      <p class="font-medium text-xl place-items-start pt-2">{{ product.price }} $</p>

      <p class="pt-2">Quantity</p>
      <div class="flex flex-row border">
        <button @click="itemStore.removeItem(product)" class="btn2 btn-ghost btn-circle"> - </button>
        <p class="pt-3 font-bold"> {{ product.quantity }}</p>
        <button @click="itemStore.addItem(product)" class="btn2 btn-ghost btn-circle"> + </button>
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