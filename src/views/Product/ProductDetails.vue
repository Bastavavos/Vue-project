<script setup>

</script>

<template>

  <div class="card bg-base-100">
    <figure class="img p-2">
      <img src="/Product_Ring.webp" alt="Product" class="h-32 w-28">
    </figure>
    <div class="card-body items-center text-center p-2">
      <h2 class="card-title">Ring</h2>
      <p>description description</p>

      <div class="card-actions mt-5">
        <button class="btn-2 p-1">color</button>
        <button class="btn-2 p-1">color</button>
        <button class="btn-2 p-1">color</button>
      </div>

      <select class="select select-bordered w-40 m-5">
        <option disabled selected>Materials</option>
        <option>material 1</option>
        <option>material 2</option>
      </select>

      <div class="card-actions mb-5">
        <button class="btn text-white mb-2">ADD TO CART</button>
        <button class="btn text-white mb-2">BUY NOW</button>
      </div>
    </div>
  </div>

</template>

<style scoped>

.card {
  border-radius: unset;
  /*border: solid 1px;*/
  font-family: sans-serif;
}

.btn {
  border-radius: unset;
  background-color: black;
  font-family: sans-serif;
}

.btn-2 {
  border: solid 1px;
  border-radius: unset;
  background-color: white;
  font-family: sans-serif;
}

.img {
  border-bottom: solid 1px ;
}

</style>