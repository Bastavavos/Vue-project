<script>
import axios from 'axios';
import {usehttpStore} from "@/stores/httpstore.js";

export default {
  data() {
    return {
      name: '',
      description: '',
      image: '',
      price: '',
      stock: '',
      active: '',
      categoryOptions: [],
      styleOptions: [],
      materialOptions: [],
      colorOptions: [],
      sizeOptions: [],
      selectedCategory: '',
      selectedStyle: '',
      selectedMaterial: '',
      selectedColor: '',
      selectedSize: '',

      isSubmit: false,
      isDarkTheme: false,
    }
  },
  methods: {
    async createProduct() {
      let productData, product
      const store = usehttpStore()
      const selectedCategoryObj = this.categoryOptions.find(option => option.value === this.selectedCategory);
      const selectedStyleObj = this.styleOptions.find(option => option.value === this.selectedStyle);
      const selectedMaterialObj = this.materialOptions.find(option => option.value === this.selectedMaterial);
      const selectedColorObj = this.colorOptions.find(option => option.value === this.selectedColor);
      const selectedSizeObj = this.sizeOptions.find(option => option.value === this.selectedSize);

      productData = {
        name: this.name,
        description: this.description,
        image: this.image,
        price: this.price,
        stock: this.stock,
        active: this.active,
        category: selectedCategoryObj ? selectedCategoryObj.label : null,
        style: selectedStyleObj ? selectedStyleObj.label : null,
        material: selectedMaterialObj ? selectedMaterialObj.label : null,
        color: selectedColorObj ? selectedColorObj.label : null,
        size: selectedSizeObj ? selectedSizeObj.label : null,
      }
      this.isSubmit = true

      try {
        console.log(productData);
        product = await store.createProduct(productData);
        console.log(product);
      } catch (error) {
        console.error("Erreur lors de la création du produit :", error.response ? error.response.data : error.message);
      }
    },

    async fetchCategories() {
      try {
        const categoryResponse = await axios.get('/categories');
        this.categoryOptions = categoryResponse.data.map(category => ({value: category.id, label: category.name}));
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories", error);
      }
    },
    async fetchStyles() {
      try {
        const styleResponse = await axios.get('/styles');
        this.styleOptions = styleResponse.data.map(style => ({value: style.id, label: style.name}));
      } catch (error) {
        console.error("Erreur lors de la récupération des styles", error);
      }
    },
    async fetchMaterials() {
      try {
        const materialResponse = await axios.get('/materials');
        this.materialOptions = materialResponse.data.map(material => ({value: material.id, label: material.name}));
      } catch (error) {
        console.error("Erreur lors de la récupération des matériaux", error);
      }
    },
    async fetchColors() {
      try {
        const colorResponse = await axios.get('/colors');
        this.colorOptions = colorResponse.data.map(color => ({value: color.id, label: color.name}));
      } catch (error) {
        console.error("Erreur lors de la récupération des couleurs", error);
      }
    },
    async fetchSizes() {
      try {
        const sizeResponse = await axios.get('/sizes');
        this.sizeOptions = sizeResponse.data.map(size => ({value: size.id, label: size.name}));
      } catch (error) {
        console.error("Erreur lors de la récupération des tailles", error);
      }
    },
  },
  created() {
    this.fetchCategories();
    this.fetchStyles();
    this.fetchMaterials();
    this.fetchColors();
    this.fetchSizes();
  }
}
</script>

<template>
  <div class="pt-20 pb-20">
    <div class="mt-10 mb-10 font-pop">
        <div class="flex flex-col justify-center">
          <div class="flex justify-center text-2xl mt-9 mb-16 font-pop">
            <h1>CREATE PRODUCT</h1>
          </div>

          <div class="flex flex-row space-x-14 justify-center">
            <div class="flex flex-col space-y-6">
              <input class="border rounded p-2" v-model="name" type="text" placeholder="Product name"
                     required :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <input class="border rounded p-2 mb-4" v-model="description" type="text"
                     placeholder="Product description" required
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <input class="border rounded p-2 mb-4" v-model="image" type="text" placeholder="Product image URL"
                     required :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <p>Category : </p>
              <select v-model="selectedCategory" required
                      :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
                <option value="" disabled>Category</option>
                <option v-for="option in categoryOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
              </select>
              <p>Style : </p>
              <select v-model="selectedStyle" required
                      :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
                <option value="" disabled>Style</option>
                <option v-for="option in styleOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
              </select>
              <p>Material : </p>
              <select v-model="selectedMaterial" required
                      :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
                <option value="" disabled>Material</option>
                <option v-for="option in materialOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
              </select>
            </div>

            <div class="flex flex-col space-y-6">
              <input class="border rounded p-2 mb-4" v-model="price" type="text" placeholder="Product price"
                     required :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <input class="border rounded p-2 mb-4" v-model="stock" type="text" placeholder="Product stock"
                     required :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <div class="flex flex-row space-x-8">
                <p>Active : </p>
                <input class="border rounded p-2" v-model="active" type="checkbox"
                       placeholder="Product active"
                       required :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              </div>
              <p>Color : </p>
              <select v-model="selectedColor" required
                      :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
                <option value="" disabled>Color</option>
                <option v-for="option in colorOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
              </select>
              <p>Size : </p>
              <select v-model="selectedSize" required
                      :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
                <option value="" disabled>Size</option>
                <option v-for="option in sizeOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
              </select>
            </div>
          </div>
          <div class="flex justify-center mt-10">
            <button @click="createProduct" type="button" class="btn text-white">Create</button>
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
</style>