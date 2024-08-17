<script>
import {usehttpStore} from "@/stores/httpstore.js";
import axios from "axios";

export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      address: '',
      roleOptions: [],
      zipOptions: [],
      cityOptions: [],
      selectedRole: '',
      selectedZipCode: '',
      selectedCity: '',

      isSubmit: false,
      isDarkTheme: false,
    }
  },
  methods: {
    async registerAction() {
      let userData, user
      const store = usehttpStore()
      const selectedRoleObj = this.roleOptions.find(option => option.value === this.selectedRole);
      const selectedZipCodeObj = this.zipOptions.find(option => option.value === this.selectedZipCode);
      const selectedCityObj = this.cityOptions.find(option => option.value === this.selectedCity);

      userData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        address: this.address,
        role_name: selectedRoleObj ? selectedRoleObj.label : null,
        zip_code_value: selectedZipCodeObj ? selectedZipCodeObj.label : null,
        city_name: selectedCityObj ? selectedCityObj.label : null,
      }
      this.isSubmit = true

      try {
        user = await store.register(userData);
        console.log(user);
      } catch (error) {
        console.error("Erreur lors de l'inscription :", error.response ? error.response.data : error.message);
      }

    },
    async fetchLocations() {
      try {
        const zipResponse = await axios.get('/zip-codes');
        this.zipOptions = zipResponse.data.map(zip => ({value: zip.id, label: zip.value}));

        const cityResponse = await axios.get('/cities');
        this.cityOptions = cityResponse.data.map(city => ({value: city.id, label: city.name}));
      } catch (error) {
        console.error("Erreur lors de la récupération des localisations", error);
      }
    },
    async fetchRoles() {
      try {
        const roleResponse = await axios.get('/roles');
        const filteredRoles = roleResponse.data.filter(role => role.name !== "Owner");
        this.roleOptions = filteredRoles.map(role => ({value: role.id, label: role.name}));
      } catch (error) {
        console.error("Erreur lors de la récupération des rôles", error);
      }
    },
  },
  created() {
    this.fetchLocations();
    this.fetchRoles();
  }
}
</script>

<template>
  <div class="pt-20">
    <div class="mt-3 mb-10 font-pop">

      <div class="flex justify-center text-2xl mt-9 mb-6 font-pop">
        <h1>CREATE ACCOUNT</h1>
      </div>

      <div class="flex flex-row p-6 space-x-14 justify-center">
        <div class="flex flex-col">
          <div class="flex flex-col justify-center">
            <p class="text-center text-md pb-8 pt-2">Contact & login :</p>
            <input
                v-model="firstname"
                type="text"
                class="border rounded p-2 mb-4 bg-white"
                name="firstname"
                placeholder="firstname"
                :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}"
            />
          </div>
          <div class="flex justify-center">
            <input
                v-model="lastname"
                type="text"
                class="border rounded p-2 mb-4 bg-white"
                name="lastname"
                placeholder="lastname"
                :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}"
            />
          </div>
          <div class="flex justify-center">
            <input
                v-model="email"
                type="text"
                class="border rounded p-2 mb-4 bg-white"
                name="email"
                placeholder="email"
                :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}"
            />
          </div>
          <div class="flex justify-center">
            <input
                v-model="password"
                type="password"
                class="border rounded p-2 mb-4 bg-white"
                name="password"
                placeholder="password"
                :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}"
            />
          </div>
        </div>

        <div class="flex flex-col">

            <p class="text-center text-md pb-6 pt-2">Location & role :</p>
            <div class="p-2 flex flex-col">
              <input
                  v-model="address"
                  type="text"
                  class="border rounded p-2 bg-white"
                  name="address"
                  placeholder="n° / street name"
                  :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}"
              />
            </div>

          <div class="p-2 flex flex-col">
            <select v-model="selectedZipCode" class="border rounded p-2 bg-white"
                    :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <option value="" disabled>Postal Code</option>
              <option v-for="option in zipOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
            </select>
          </div>
          <div class="p-2 flex flex-col">
            <select v-model="selectedCity" class="border rounded p-2 bg-white"
                    :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <option value="" disabled>City</option>
              <option v-for="option in cityOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
            </select>
          </div>
          <div class="p-2 flex flex-col">
            <select v-model="selectedRole" class="border rounded p-2 mb-4 bg-white"
                    :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <option value="" disabled>Role</option>
              <option v-for="option in roleOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
            </select>
          </div>

        </div>

      </div>


      <div class="flex justify-center mt-5 font-pop">
        <RouterLink to="/sign-in">
          <button @click="registerAction" @keydown.enter.prevent="registerAction" type="button" class="btn text-white">Confirm</button>
        </RouterLink>
      </div>
    </div>
  </div>

<!--  mettre a droite la selection du role avec explication détaillée pour artisan -->

</template>

<style scoped>
.btn {
  border: unset;
  border-radius: 5px;
  background-color: #56b280;
}
</style>