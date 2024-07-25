<script>
import ProductCard from "@/components/ProductCard.vue";
import {usehttpStore} from "@/stores/httpstore.js";
import {onMounted, ref, watch} from "vue";

export default {
  components: {ProductCard},
  setup() {
    const shop = usehttpStore();

    const selectedCategory = ref('All Categories');
    const categoryMap = { // Map of categories by uuid API
      'All Categories': null,
      Tools: '623bd136-e29e-4a60-9d2d-4a671c36c0bd',
      Jewelry: '49e63eeb-ccb3-4626-a211-489dc531688a',
      Decoration: 'e2dd60f1-f222-4542-8bc9-7ce454f90e60',
      Cosmetic: 'b709cd70-8dc0-4b8e-952a-f8f6a994ed4d'
    };

    const selectedStyle = ref('All Styles');
    const styleMap = {
      'All Styles': null,
      New:'91698c6f-62e8-4c0b-8e66-b3e63587cefe',
      Refined:'ed93bd50-148a-4223-936d-e452730b755f',
      Old:'f849ec2b-2502-4aff-8a80-c6d6a9531ea5',
      Artistic:'fa14d5c0-6059-425e-aea0-47e62f381016'
    };

    const selectedMaterial = ref('All Materials');
    const materialMap = {
      'All materials': null,
      PlasticFree:'0b0434e3-a231-42f0-a657-093771f3808b',
      Iron:'0e7aab6e-2df6-4a45-9fa1-08a50cad012b',
      Wood:'100e831c-0f4b-4f77-9af3-1c7b0fae70aa',
      Textile:'14e0c28b-e732-4210-b508-a6278ad6b240',
      Silk:'180e3986-26b6-4e8c-a16f-d8c26c868665',
      Diamond:'2c48ba4c-25ec-4cdb-9a56-c7f9ef440dae',
      Rubber:'470bf663-fa21-451d-a8e2-8bf58a46ef64',
      Emerald:'722064d0-c916-48ac-b6f9-02622925ab9f',
      Gold:'a53cb7bc-04c6-4871-8ce7-d6f88fa05a13',
      AllergenFree:'a862a25d-036e-48ca-a311-cdf67805e83a',
      Silver:'bb23468e-e2b4-4a77-9bb4-76b3b8375aaf',
      Ceramic:'e69f5359-714c-47a7-8c86-ea3e3705890f',
      Clay:'f3765857-6d9e-4130-b673-6cacc7c1b4b6',
      Natural:'fa116a3d-df2a-4045-9c0a-9c12ee4fb662'
  };

    onMounted(() => {
      shop.getProducts();
    })

    watch(selectedCategory, async (newValue) => {
      if (newValue === 'All Categories') {
        await shop.getProducts(); // no filter so all products
      } else {
        const categoryId = categoryMap[newValue]; // take uuid
        if (categoryId !== null && categoryId !== undefined) {
          await shop.getProductsByCategory(categoryId); // take products if there is uuid specified
        }
      }
    });
      watch(selectedStyle, async (newValue) => {
      if (newValue === 'All Styles') {
        await shop.getProducts();
      } else {
        const styleId = styleMap[newValue];
        if (styleId !== null && styleId !== undefined) {
          await shop.getProductsByStyle(styleId);
        }
      }
    });
    watch(selectedMaterial, async (newValue) => {
      if (newValue === 'All Materials') {
        await shop.getProducts();
      } else {
        const materialId = materialMap[newValue];
        if (materialId !== null && materialId !== undefined) {
          await shop.getProductsByMaterial(materialId);
        }
      }
    });
    return {shop, selectedCategory, selectedStyle, selectedMaterial};
  },
  data(){
    return{
      isDarkTheme: false,
    }
  }
}
</script>

<template>
<div class="pt-20">
  <div class="flex justify-center pb-3">
    <h1 class="title text-2xl mt-10 font-pop">SHOP</h1>
  </div>

  <div class="flex justify-center font-pop">
    <select class="select select-bordered w-40 m-5" v-model="selectedStyle" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
      <option>All Styles</option>
      <option>New</option>
      <option>Old</option>
      <option>Refined</option>
      <option>Artistic</option>
    </select>
    <select class="select select-bordered w-40 m-5" v-model="selectedCategory" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
      <option>All Categories</option>
      <option>Tools</option>
      <option>Jewelry</option>
      <option>Decoration</option>
      <option>Cosmetic</option>
    </select>
    <select class="select select-bordered w-40 m-5" v-model="selectedMaterial" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
      <option>All Materials</option>
      <option>PlasticFree</option>
      <option>Iron</option>
      <option>Wood</option>
      <option>Textile</option>
      <option>Silk</option>
      <option>Diamond</option>
      <option>Rubber</option>
      <option>Emerald</option>
      <option>Gold</option>
      <option>AllergenFree</option>
      <option>Silver</option>
      <option>Ceramic</option>
      <option>Clay</option>
      <option>Natural</option>
    </select>
    <select class="select select-bordered w-40 m-5" :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
      <option>Prices</option>
      <option>Max</option>
      <option>Min</option>
    </select>
  </div>

  <div class="container">
    <div class="flex justify-center pt-10">
      <div class="wrapper">
        <ProductCard v-for="product in shop.products" :product="product"/>
      </div>
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

