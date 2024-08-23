<script>
import {useItemsStore} from "@/stores/cart.js";
import {RouterLink} from "vue-router";

export default {
  components: {RouterLink},
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
        <img :src="product.image" alt="Product" class="object-cover">
      </figure>
    </RouterLink>
    <div class="card-body items-center text-center p-2">
      <h2 class="card-title">{{ product.name }}</h2>
      <p>{{ product.description.split('.')[0] }}</p>
      <p class="font-bold text-xl">{{ product.price }} $</p>
      <div class="card-actions object-contain">
        <button @click="itemStore.addItem(product)" class="btn text-white mb-2">
          <i-ph-bag class="h-4 w-4"></i-ph-bag>
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: unset;
}
.btn {
  border: unset;
  border-radius: 5px;
  background-color: #56b280;
}
.img {
border-bottom: solid 1px ;
  border-color: rgba(0, 0, 0, 0.1);
}
</style>


