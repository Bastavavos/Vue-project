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
        <option value="a62e1040-c24e-4cd8-a10b-a0e4432d3bc0">Tools</option>
        <option value="1a3ebeab-be75-43b7-b1a1-a2da12d976fa">Jewelry</option>
        <option value="53827f7f-2e05-4a76-9076-a3d3726ab992">Decoration</option>
        <option value="d8e2e076-41ae-480a-be1a-97f7d9b0b942">Cosmetic</option>
      </select>
      <select v-model="styleId" class="select select-bordered w-40 m-5" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
        <option value="">All Styles</option>
        <option value="ef462b0a-7672-4128-a0c7-494658eb26bb">New</option>
        <option value="e6812661-fc97-4712-97bc-f76dca956299">Old</option>
        <option value="c56d25f9-03d1-4b8c-9a11-59328b730dc4">Refined</option>
        <option value="da2957f9-865b-492e-bc04-cb03224892c4">Artistic</option>
      </select>
      <select v-model="materialId" class="select select-bordered w-40 m-5" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
        <option value="">All Materials</option>
        <option value="a8ed8340-a185-4200-8be4-91ecae2fc41e">Wood</option>
        <option value="2b246884-997f-41e5-8410-caf6c38aa001">Gold</option>
        <option value="45b99104-74dc-4043-985d-fcb235508f1a">Allergen Free</option>
        <option value="5e1d9a0f-e347-4e02-b94c-85c57879d1d4">Silver</option>
        <option value="d73d33b2-e030-4e10-b44e-a87b4c6bd460">Natural</option>
      </select>

      <select v-model="userId" class="select select-bordered w-40 m-5" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
        <option value="">All Artisans</option>
        <option value="9ccd40fb-cf43-4b8a-bf70-4e5c48f9fc78">Constance Lemaitre</option>
        <option value="9ccd40fb-d13d-4844-85d7-96ee3157c22d">Agathe Guerin
        </option>
        <option value="9ccd40fb-d484-4d59-95b9-335be188f205">Élodie Rocher
        </option>
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