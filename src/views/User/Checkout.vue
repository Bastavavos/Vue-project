<script setup>

import {RouterLink} from "vue-router";
</script>

<template>

  <div class="p-8 pb-8">
    <h1 class="pb-4">Contact</h1>
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" class="grow" placeholder="Email"/>
    </label>
  </div>
  <div class="pr-8 pl-8 pb-2">
    <h1 class="pb-4">Shipping Address</h1>
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" class="grow" placeholder="Address"/>
    </label>
  </div>
  <div class="pr-8 pl-8 pb-2">
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" class="grow" placeholder="Postal Code"/>
    </label>
  </div>
  <div class="pr-8 pl-8 pb-2">
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" class="grow" placeholder="City"/>
    </label>
  </div>

  <div class="flex justify-center mt-8 pb-8">
      <button class="btn text-white">CONFIRM</button>
  </div>

</template>

<style scoped>
.btn {
  border-radius: unset;
  background-color: black;
}
</style>