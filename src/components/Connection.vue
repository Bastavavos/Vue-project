<script setup>

import {RouterLink} from "vue-router";
</script>

<template>

  <div class="mt-3 mb-10 font-dm">

    <div class="flex justify-center text-2xl mt-9 mb-4 font-ryman">
      <h1>SIGN IN</h1>
    </div>

    <div class="flex justify-center">
      <label class="form-control">
        <div class="label">
          <p>Firstname or email :</p>
        </div>
        <textarea class="textarea textarea-bordered h-3" placeholder="max 55"></textarea>
      </label>
    </div>

    <div class="flex justify-center items-center">
      <label class="form-control">
        <div class="label">
          <p>Password :</p>
        </div>
        <textarea class="textarea textarea-bordered h-3"></textarea>
      </label>
    </div>

    <div class="flex justify-center mt-10">
      <button class="btn text-white"><RouterLink to="/">Enter</RouterLink></button>
    </div>
  </div>



</template>

<style scoped>
.btn {
  border-radius: unset;
  background-color: black;
}
</style>