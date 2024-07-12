<script>
// import {RouterLink} from "vue-router";
import {usehttpStore} from "@/stores/httpstore.js";

export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      address: '',
      role: '',
      zip_code: '',
      city: '',

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

  <div class="mt-3 mb-10 font-pop">

    <div class="flex justify-center text-2xl mt-9 mb-4 font-pop">
      <h1>SIGN UP</h1>
    </div>

    <div class="flex justify-center">
      <input
          v-model="firstname"
          type="text"
          class="border rounded p-2 mb-4 bg-white"
          name="firstname"
          placeholder="firstname"
      />
    </div>

    <div class="flex justify-center">
      <input
          v-model="lastname"
          type="text"
          class="border rounded p-2 mb-4 bg-white"
          name="lastname"
          placeholder="lastname"
      />
    </div>

    <div class="flex justify-center">
      <input
          v-model="email"
          type="text"
          class="border rounded p-2 mb-4 bg-white"
          name="email"
          placeholder="email"
      />
    </div>

    <div class="flex justify-center">
      <input
          v-model="password"
          type="text"
          class="border rounded p-2 mb-4 bg-white"
          name="password"
          placeholder="password"
      />
    </div>

    <div class="flex justify-center">
      <input
          v-model="address"
          type="text"
          class="border rounded p-2 mb-4 bg-white"
          name="address"
          placeholder="address"
      />
    </div>

    <div class="flex justify-center">
      <input
          v-model="role"
          type="text"
          class="border rounded p-2 mb-4 bg-white"
          name="role"
          placeholder="customer or artisan ?"
      />
    </div>

    <div class="flex justify-center">
      <input
          v-model="zip_code"
          type="text"
          class="border rounded p-2 mb-4 bg-white"
          name="zip_code"
          placeholder="postal code"
      />
    </div>

    <div class="flex justify-center">
      <input
          v-model="city"
          type="text"
          class="border rounded p-2 mb-4 bg-white"
          name="city"
          placeholder="city"
      />
    </div>

    <div class="flex justify-center mt-5 font-pop">
      <RouterLink to="/sign-in">
        <button @click="registerAction" type="submit" class="btn text-white">Confirm</button>
      </RouterLink>
    </div>

    <div class="flex justify-center mt-9 font-pop">
      <h1 class="text-xl">Thanks for your registration !</h1>
    </div>

  </div>

</template>

<style scoped>
.btn {
  border: unset;
  border-radius: 5px;
  background-color: #56b280;
}
</style>