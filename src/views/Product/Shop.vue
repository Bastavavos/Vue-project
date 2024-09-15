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

    <div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 m-0 justify-center font-pop">
      <select v-model="categoryId" class="select select-bordered w-40 m-5" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
        <option value="">All Categories</option>
        <option value="8f2b3415-6748-435e-9253-5eca3c0cbac4">Tools</option>
        <option value="9cf900b7-2806-4f43-8d29-e89f944191bc">Jewelry</option>
        <option value="ef78fd6f-01cd-4ac5-9591-0ea0dafc5578">Decoration</option>
        <option value="e96a8375-2e43-4d62-9478-6bffbfdc8e85">Cosmetic</option>
      </select>
      <select v-model="styleId" class="select select-bordered w-40 m-5" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
        <option value="">All Styles</option>
        <option value="7979d1da-575b-4905-9dcf-8aa1e24bc148">New</option>
        <option value="d90aabc9-e62c-4665-83c1-a41a628dcc6b">Old</option>
        <option value="3517521f-d1d6-49dd-a677-90ffab1a9326">Refined</option>
        <option value="676e2cc9-4e07-400a-9bd5-23bc309c5f17">Artistic</option>
      </select>
      <select v-model="materialId" class="select select-bordered w-40 m-5" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
        <option value="">All Materials</option>
        <option value="ead096eb-410d-43ee-84ff-170ad086d6c6">Wood</option>
        <option value="dd42344d-df15-40b6-81ee-ab1c33aff051">Gold</option>
        <option value="7c88aa08-9d00-4254-999c-bf7370eafb29">Allergen Free</option>
        <option value="988956c7-4cc5-4b3b-8609-8fe03dd4785c">Silver</option>
        <option value="71f6a210-d251-49d7-9f4b-54b04220ccb6">Natural</option>
      </select>
      <select v-model="userId" class="select select-bordered w-40 m-5" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
        <option value="">All Artisans</option>
        <option value="9cfbbac5-2dfe-49ef-8748-e3626e32af47">Nicolas Tessier</option>
        <option value="9cfbbac5-3566-43b3-b6be-dfe697fcf344">Roger Blin</option>
      </select>
    </div>

    <div class="container">
      <div class="flex justify-center pt-10 pb-28">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCard v-for="product in shop.products" :key="product.id" :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  margin: 0 auto;
  max-width: 1490px;
  padding-left: 27px;
  padding-right: 27px;
  -webkit-transition: padding .4s ease-in-out;
  transition: padding .4s ease-in-out;
}
</style>