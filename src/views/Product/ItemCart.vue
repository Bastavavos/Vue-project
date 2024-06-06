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
  <div class="card shadow-lg mb-1 font-pop">
    <RouterLink :to="`/product/${product.id}`">
      <figure class="img p-2">
        <img :src="product.image" alt="Product" class="h-32 w-28">
        <!--        <img src="https://www.creationapart.fr/475-home_default/bague-cubes-.jpg" alt="Ring" class="h-32 w-28"/>-->
      </figure>
    </RouterLink>
    <div class="card-body items-center text-center p-2">
      <h2 class="card-title">{{product.name}}</h2>
      <p class="font-bold text-xl place-items-start">{{ product.price }} $</p>

      <p>Quantity</p>
      <div class="flex flex-row border pr-3 pl-3">
        <button @click="itemStore.removeItem(product)" class="btn2">-</button>
        <p class="pr-3 pl-3"> {{ product.quantity }}</p>
        <button @click="itemStore.addItem(product)" class="btn2">+</button>
      </div>
    </div>
  </div>

</template>

<style scoped>
.btn2 {
  border-radius: unset;
  background-color: white;
  border-color: #56b280;
  color: #56b280;
}


</style>