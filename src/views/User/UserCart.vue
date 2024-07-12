<script setup>
import {useItemsStore} from "@/stores/cart.js";
import ItemCart from "@/views/Product/ItemCart.vue";
const itemStore = useItemsStore();
</script>

<template>

  <div class="flex justify-center font-pop">
    <h1 class="title text-2xl mt-10 mb-4">MY CART</h1>
  </div>
  <div class="font-pop flex justify-center">
    <RouterLink to="/shop"><p class="mb-10" id="back">Back to shopping</p></RouterLink>
  </div>


  <div class="container">
    <div class="flex justify-center">
      <div class="wrapper">
        <ItemCart v-for="product in itemStore.items" :key="product.id" :product="product"/>
      </div>
    </div>

    <div class="card shadow-lg mb-10 mt-5 font-pop">
      <div class="card-body items-center text-center p-2">
        <button @click="itemStore.removeAllItems()" class="mb-10" id="back">Clear cart</button>
        <h2 class="card-title mb-6">Total</h2>
        <p class="font-bold text-xl">{{ itemStore.totalPrice }} $</p>
        <RouterLink to="/checkout">
          <button class="btn text-white mb-2 mt-8">Checkout</button>
        </RouterLink>
      </div>
    </div>
  </div>

</template>

<style scoped>

.card {
  border-radius: 5px;
  //border: solid 1px;
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
  border: unset;
  border-radius: 5px;
  background-color: #56b280;
}

#back {
  color: #56b280;
  text-decoration: underline;
}
</style>


