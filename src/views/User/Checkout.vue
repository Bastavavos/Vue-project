<script>
import {useItemsStore} from "@/stores/cart.js";
import ItemCart from "@/views/Product/ItemCart.vue";
import ItemCheckout from "@/views/Product/ItemCheckout.vue";
const itemStore = useItemsStore();

export default {
  components: {ItemCheckout, ItemCart},
  setup() {
  },
  data() {
    return {
      itemStore,
      isDarkTheme: false
    }
  }
}
</script>

<template>
<div class="pt-20">
  <h1 class="flex justify-center font-pop title text-2xl pt-12 mb-8">Delivery information</h1>

  <div class="flex flex-row justify-center space-x-12 mb-20 pl-20">
    <div class="font-pop">
      <div class="p-8 pb-8 flex flex-col justify-center">
        <h1 class="pb-4">Contact</h1>
        <label class="input input-bordered flex items-center" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
          <input type="text" placeholder="Email"/>
        </label>
      </div>

      <div class="pr-8 pl-8 pb-2">
        <h1 class="pb-4">Delivery address</h1>
        <label class="input input-bordered flex items-center" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
          <input type="text" class="grow" placeholder="Address"/>
        </label>
      </div>

      <div class="pr-8 pl-8 pb-2">
        <label class="input input-bordered flex items-center" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
          <input type="text" class="grow" placeholder="Postal Code"/>
        </label>
      </div>

      <div class="pr-8 pl-8 pb-2">
        <label class="input input-bordered flex items-center" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
          <input type="text" class="grow" placeholder="City"/>
        </label>
      </div>

      <div class="flex flex-row justify-center mt-8 pb-8 space-x-5">
        <button class="btn font-pop text-white">Confirm</button>
        <RouterLink to="/user-cart"><button class="btn font-pop text-white">Back to cart</button></RouterLink>
      </div>
    </div>


    <div class="container pt-20">
      <div class="flex justify-center">
        <div class="wrapper">
          <ItemCheckout v-for="product in itemStore.items" :key="product.id" :product="product"/>
        </div>
      </div>
      <div class="card shadow-lg mb-10 mt-5 font-pop">
        <div class="card-body items-center text-center p-2 pb-10">
          <h2 class="card-title mb-6">Total</h2>
          <p class="font-bold text-xl">{{ itemStore.totalPrice }} $</p>
        </div>
      </div>
    </div>

  </div>

</div>

</template>

<style scoped>
.btn {
  border: unset;
  border-radius: 5px;
  background-color: #56b280;
}
.card {
  border-radius: 5px;
}
.wrapper {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3,minmax(0,1fr));
  grid-auto-rows: auto;
}
.container {
  max-width: 1000px;
  padding-left: 40px;
  padding-right: 40px;
  -webkit-transition: padding .4s ease-in-out;
  transition: padding .4s ease-in-out;
}
#back {
  color: #56b280;
  text-decoration: underline;
}
</style>