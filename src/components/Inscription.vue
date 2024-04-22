<script>
// import {RouterLink} from "vue-router";
import {usehttpStore} from "@/stores/httpstore.js";
export default {
  data() {
    return {
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      address:'',
      role:'',
      zip_code:'',
      city:'',

      isSubmit: false
    }
  },
  methods: {
    async registerAction() {
      let userData, user
      const store = usehttpStore()

      userData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        address: this.address,
        role: this.role,
        zip_code_id: this.zip_code,
        city_id: this.city
      }
      this.isSubmit = true

      user = await store.register(userData)
      console.log(user)
    }
  }
}
</script>

<template>

<div class="mt-3 mb-10 font-dm">

  <div class="flex justify-center text-2xl mt-9 mb-4 font-ryman">
    <h1>SIGN UP</h1>
  </div>

  <div class="flex justify-center">
  <input
      v-model="firstname"
      type="text"
      class="border-grey-light p-2 mb-4"
      name="firstname"
      placeholder="firstname"
  />
  </div>

  <div class="flex justify-center">
    <input
        v-model="lastname"
        type="text"
        class="border-grey-light p-2 mb-4"
        name="lastname"
        placeholder="lastname"
    />
  </div>

  <div class="flex justify-center">
    <input
        v-model="email"
        type="text"
        class="border-grey-light p-2 mb-4"
        name="email"
        placeholder="email"
    />
  </div>

  <div class="flex justify-center">
    <input
        v-model="password"
        type="text"
        class="border-grey-light p-2 mb-4"
        name="password"
        placeholder="password"
    />
  </div>

  <div class="flex justify-center">
    <input
        v-model="address"
        type="text"
        class="border-grey-light p-2 mb-4"
        name="address"
        placeholder="address"
    />
  </div>

  <div class="flex justify-center">
    <input
        v-model="role"
        type="text"
        class="border-grey-light p-2 mb-4"
        name="role"
        placeholder="Visitor, Customer or Artisan ?"
    />
  </div>

  <div class="flex justify-center">
    <input
        v-model="zip_code"
        type="text"
        class="border-grey-light p-2 mb-4"
        name="zip_code"
        placeholder="postal code"
    />
  </div>

  <div class="flex justify-center">
    <input
        v-model="city"
        type="text"
        class="border-grey-light p-2 mb-4"
        name="city"
        placeholder="city"
    />
  </div>

  <div class="flex justify-center mt-10">
    <RouterLink to="/sign-in">
    <button @click="registerAction" type="submit" class="btn text-white">CONFIRM</button>
    </RouterLink>
  </div>

  <div class="flex justify-center mt-9 font-ryman">
    <h1 class="text-xl">Thanks for your registration !</h1>
  </div>

</div>

</template>

<style scoped>
.btn {
  border-radius: unset;
  background-color: black;
}
</style>