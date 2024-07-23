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
      Tools: 'fdcd269b-0630-4f44-8f50-e8bf35b8d87e',
      Jewelry: 'ca33b838-8eae-4a68-bbc5-9a2b1e6aeb97',
      Decoration: 'a8fd43a2-36cf-4406-902b-7dc2a283d836',
      Cosmetic: 'f6dbdcac-dee6-47b4-9624-63e3a5eb4545'
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
    return {shop, selectedCategory};
  }
}
</script>

<template>

  <div class="flex justify-center pt-16">
    <h1 class="title text-2xl mt-6 font-pop">SHOP</h1>
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

