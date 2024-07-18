<script>
import ProductCard from "@/components/ProductCard.vue";
import {usehttpStore} from "@/stores/httpstore.js";
import {onMounted, ref, watch} from "vue";

export default {
  components: {ProductCard},
  setup() {
    const shop = usehttpStore();
    const selectedCategory = ref('All products'); // new test
    const categoryMap = { // Map of categories by uuid API
      'All products': null,
      Tools: '623bd136-e29e-4a60-9d2d-4a671c36c0bd',
      Jewelry: '49e63eeb-ccb3-4626-a211-489dc531688a',
      Decoration: 'e2dd60f1-f222-4542-8bc9-7ce454f90e60',
      Cosmetic: 'b709cd70-8dc0-4b8e-952a-f8f6a994ed4d'
    };

    onMounted(() => {
      shop.getProducts();
    })

    watch(selectedCategory, async (newValue) => {
      if (newValue === 'All products') {
        await shop.getProducts(); // no filter so all products
      } else {
        const categoryId = categoryMap[newValue]; // take uuid
        if (categoryId !== null && categoryId !== undefined) {
          await shop.getProductsByCategory(categoryId); // take products if there is uuid specified
        }
      }
    });

    // watch(selectedCategory, async (newValue) => {
    //   const categoryId = categoryMap[newValue]; // UUID category
    //   if (categoryId !== 'All products') {
    //     await shop.getProductsByCategory(categoryId); // take products by category if uuid specified
    //   } else {
    //     await shop.getProducts();
    //   }
    // });

    return {shop, selectedCategory};
  }
}
</script>

<template>

  <div class="flex justify-center">
    <h1 class="title text-2xl mt-10 font-pop">SHOP</h1>
  </div>

  <div class="flex justify-center font-pop">
    <select class="select select-bordered w-40 m-5 bg-white" v-model="selectedCategory">
      <option>All products</option>
      <option>Tools</option>
      <option>Jewelry</option>
      <option>Decoration</option>
      <option>Cosmetic</option>
    </select>
  </div>

  <div class="container">
    <div class="flex justify-center">
      <div class="wrapper">
        <ProductCard v-for="product in shop.products" :product="product"/>
      </div>
    </div>
  </div>

</template>

<style scoped>
.wrapper {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
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

