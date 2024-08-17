<script>
import {usehttpStore} from "@/stores/httpstore.js";
import router from "@/router/index.js";

export default {
  data() {
    return {
      email: null,
      password: null,
      isSubmit: false,
      isDarkTheme: false,
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

      this.$router.push('/');
    }
  }
}
</script>


<template>
  <div class="pt-20">
      <div class="mt-3 mb-10 font-pop mb-96">
        <div class="flex justify-center text-2xl mt-9 mb-10 font-pop">
          <h1>SIGN IN</h1>
        </div>
        <div class="flex justify-center">
          <input
              v-model="email"
              type="text"
              class="border rounded p-2 mb-4"
              name="id"
              placeholder="email"
              :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}"
          />
        </div>

        <div class="flex justify-center">
          <input
              v-model="password"
              type="password"
              class="border rounded p-2 mb-4"
              name="password"
              placeholder="password"
              :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}"
              v-on:keyup.enter="loginAction(true)"
          />
        </div>

        <div class="flex justify-center mt-10">
            <button @click="loginAction"  type="button" class="btn text-white">Login</button>
        </div>
      </div>
  </div>

<!--  ajouter une div avec don't have account go to sign up avec lien vers sign up flex-row et ligne verticale entre les 2   -->

</template>

<style scoped>
.btn {
  border: unset;
  border-radius: 5px;
  background-color: #56b280;
}
</style>