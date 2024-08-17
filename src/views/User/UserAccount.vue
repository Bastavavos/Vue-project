<script>
import {usehttpStore} from "@/stores/httpstore.js";
import axios from "axios";

export default {
  data() {
    return {
      isDarkTheme: false,
      firstname: '',
      lastname: '',
      email: '',
      address: '',
    }
  },
  methods: {
    async submitForm() {
      const userData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        address: this.address,
      };

      try {
        const updatedUser = await usehttpStore().updateUser(userData);
        console.log(updatedUser);
      } catch (error) {
        console.error("Erreur lors de la mise à jour des informations de l'utilisateur:", error);
      }
    },
  },
  mounted() {
    try {
      const store = usehttpStore();
      const currentUser = store.currentUser;
      this.firstname = currentUser ? currentUser.firstname : '';
      this.lastname = currentUser ? currentUser.lastname : '';
      this.email = currentUser ? currentUser.email : '';
      this.address = currentUser ? currentUser.address : '';

    } catch (error) {
      console.error("Erreur lors de la récupération des informations de l'utilisateur :", error);
    }
  },
}
</script>

<template>

  <div class="pt-20">
    <form @submit.prevent="submitForm">
      <div class="flex justify-center text-2xl mt-9 mb-4 font-pop">
        <h1>My informations account</h1>
      </div>
      <div class="font-pop flex justify-center text-2xl mt-9 mb-4">
        <div>
          <div>
            <label for="first-name" class="text-sm">First name</label>
            <div class="flex flex-row mt-2 ">
              <input v-model="firstname" type="text" name="first-name" id="first-name" autocomplete="given-name"
                     class="border rounded p-2 mb-4 input-placeholder"
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}"
                     :placeholder="firstname">
              <button class="btn btn-ghost btn-circle">
                <i-ph-note-pencil class="h-5 w-5"></i-ph-note-pencil>
              </button>
            </div>
          </div>

          <div>
            <label for="last-name" class="text-sm">Last name</label>
            <div class="flex flex-row mt-2 ">
              <input v-model="lastname" type="text" name="last-name" id="last-name" autocomplete="family-name"
                     class="border rounded p-2 mb-4 input-placeholder"
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}"
                     :placeholder="lastname">
              <button class="btn btn-ghost btn-circle">
                <i-ph-note-pencil class="h-5 w-5"></i-ph-note-pencil>
              </button>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="text-sm">Email</label>
            <div class="flex flex-row mt-2 ">
              <input v-model="email" id="email" name="email" type="email" autocomplete="email"
                     class="border rounded p-2 mb-4 input-placeholder"
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}"
                     :placeholder="email">
              <button class="btn btn-ghost btn-circle">
                <i-ph-note-pencil class="h-5 w-5"></i-ph-note-pencil>
              </button>
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" class="text-sm">Address</label>
            <div class="flex flex-row mt-2">
              <input v-model="address" type="text" name="street-address" id="street-address" autocomplete="street-address"
                     class="border rounded p-2 mb-4 input-placeholder"
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}"
                     :placeholder="address">
              <button class="btn btn-ghost btn-circle">
                <i-ph-note-pencil class="h-5 w-5"></i-ph-note-pencil>
              </button>
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" class="text-sm">City</label>
            <div class="flex flex-row mt-2 ">
              <input  type="text" name="city" id="city" autocomplete="address-level2"
                     class="border rounded p-2 mb-4 input-placeholder"
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}"
                     >
              <button class="btn btn-ghost btn-circle">
                <i-ph-note-pencil class="h-5 w-5"></i-ph-note-pencil>
              </button>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="postal-code" class="text-sm">Postal code</label>
            <div class="flex flex-row mt-2 ">
              <input  type="text" name="zip_code" id="zip_code" autocomplete="postal-code"
                     class="border rounded p-2 mb-4 input-placeholder"
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}"
                     >
              <button class="btn btn-ghost btn-circle">
                <i-ph-note-pencil class="h-5 w-5"></i-ph-note-pencil>
              </button>
            </div>
          </div>
        </div>

      </div>

      <div class="flex justify-center mb-36 font-pop pt-10 pr-12">
        <button type="submit" class="btn btn2 text-white">Save changes</button>
      </div>
    </form>
  </div>


</template>

<style scoped>
.input-placeholder {
  font-size: 16px;
}
.btn2 {
  border: unset;
  border-radius: 5px;
  background-color: #56b280;
}
</style>