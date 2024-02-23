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
  <div class="card bg-base-100 shadow-xl mb-1 font-dm">
    <RouterLink to="/product-details">
      <figure class="img p-2">
        <img :src="product.image" alt="Product" class="h-32 w-28">
        <!--        <img src="https://www.creationapart.fr/475-home_default/bague-cubes-.jpg" alt="Ring" class="h-32 w-28"/>-->
      </figure>
    </RouterLink>
    <div class="card-body items-center text-center p-2">
      <h2 class="card-title">{{product.title.split(' ')[0]}}</h2>
      <p>{{product.description.split('.')[0]}}</p>
      <p class="font-bold text-xl">{{product.price}} $</p>
      <div class="card-actions">
        <button  @click="itemStore.removeItem(product)" class="btn text-white mb-2 font-dm">DELETE</button>
      </div>
    </div>
  </div>

</template>

<style scoped>
.btn {
  border-radius: unset;
  background-color: black;
}
</style>