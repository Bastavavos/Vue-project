<script>
import ProductCard from "@/components/ProductCard.vue";
import { usehttpStore } from "@/stores/httpstore.js";
import { onMounted, ref, watchEffect } from "vue";

export default {
  components: { ProductCard },
  setup() {
    const shop = usehttpStore();
    const categoryId = ref("");
    const styleId = ref("");
    const materialId = ref("");
    const userId = ref("");

    watchEffect(() => {
      const updateProducts = async () => {
        if (categoryId.value !== "" || styleId.value !== "" || materialId.value !== "" || userId.value !== "") {
          try {
            let filteredProducts = [];
            if (userId.value !== "") {
              filteredProducts = await shop.productsByUserId(userId.value);
            } else {
              filteredProducts = await shop.getProductFilters(categoryId.value, styleId.value, materialId.value);
            }
            await shop.setProducts(filteredProducts);
          } catch (error) {
            console.error("Failed to fetch or update products:", error);
          }
        } else {
          await shop.getProducts();
        }
      };
      updateProducts();
    });
    onMounted(() => {
      shop.getProducts();
    });
    return { shop, categoryId, styleId, materialId, userId };
  },
  data() {
    return {
      isDarkTheme: false,
    };
  },
};
</script>

<template>
  <div class="pt-20">
    <div class="flex justify-center pb-3">
      <h1 class="title text-2xl mt-10 font-pop">SHOP</h1>
    </div>

    <div class="flex justify-center font-pop">
      <select v-model="categoryId" class="select select-bordered w-40 m-5" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
        <option value="">All Categories</option>
        <option value="9e55781b-30d4-4eb8-b748-b522db65a88a">Tools</option>
        <option value="98f4ff97-2138-496f-9b64-2612fa2262bf">Jewelry</option>
        <option value="f3f88820-b50d-4864-bf7f-c3be72ec23a3">Decoration</option>
        <option value="66040d2d-ea5a-4b88-8517-26363aca3211">Cosmetic</option>
      </select>
      <select v-model="styleId" class="select select-bordered w-40 m-5" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
        <option value="">All Styles</option>
        <option value="aec7ed34-e4cf-4fd5-a197-b1d95e26937e">New</option>
        <option value="67914d5b-05c0-4708-8f52-d66fe5a9d5e8">Old</option>
        <option value="26227d90-8a2f-4549-b413-23a79950a706">Refined</option>
        <option value="c88407ff-1f82-48af-a0a4-8c3b8dcdd9eb">Artistic</option>
      </select>
      <select v-model="materialId" class="select select-bordered w-40 m-5" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
        <option value="">All Materials</option>
        <option value="2d62cbb9-8930-4fc1-8b47-48492b1ce91e">Wood</option>
        <option value="11c16ed5-430c-4bf9-bcc6-a4b3ee489a44">Gold</option>
        <option value="afe07762-864c-4fec-be47-d16c8be38536">Allergen Free</option>
        <option value="5cb8bb67-bfaf-4f3c-95f8-8180f2c4a335">Silver</option>
        <option value="7c894fe2-8d5c-49ab-87ec-a6cdbbec4615">Natural</option>
      </select>

      <select v-model="userId" class="select select-bordered w-40 m-5" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
        <option value="">All Artisans</option>
        <option value="9cc84d22-8acc-4971-ba5e-46ed1d8a39b0">René Roche</option>
        <option value="9cc84d22-8ce1-4a06-acf1-52885d63a2bc">Sylvie Michaud</option>
        <option value="9cc84d22-8e4f-4f08-b62a-37f3c437882c">Dorothée Jacquet</option>
      </select>
    </div>

    <div class="container">
      <div class="flex justify-center pt-10 pb-28">
        <div class="wrapper">
          <ProductCard v-for="product in shop.products" :key="product.id" :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.wrapper {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: auto;
}
.container {
  margin: 0 auto;
  max-width: 1490px;
  padding-left: 27px;
  padding-right: 27px;
  -webkit-transition: padding .4s ease-in-out;
  transition: padding .4s ease-in-out;
}
</style>