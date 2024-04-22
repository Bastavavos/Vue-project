<script>
// import {RouterLink} from "vue-router";
import {usehttpStore} from "@/stores/httpstore.js";

export default {
  data() {
    return {
      email: null,
      password: null,
      isSubmit: false
    }
  },
  methods: {
    async loginAction() {
      let dataLogin, login
      const httpStore = usehttpStore()

      dataLogin = {
        email: this.email,
        password: this.password
      }
      this.isSubmit = true

      login = await httpStore.login(dataLogin)
      console.log(login)
    }
  }
}
</script>

<template>

  <div class="mt-3 mb-10 font-dm">

    <div class="flex justify-center text-2xl mt-9 mb-4 font-ryman">
      <h1>SIGN IN</h1>
    </div>

    <div class="flex justify-center">
      <input
          v-model="email"
          type="text"
          class="border-grey-light p-2 mb-4"
          name="id"
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

    <div class="flex justify-center mt-10">
      <RouterLink to="/">
      <button @click="loginAction" type="submit" class="btn text-white">ENTER</button>
      </RouterLink>
    </div>
  </div>


</template>

<style scoped>
.btn {
  border-radius: unset;
  background-color: black;
}
</style>