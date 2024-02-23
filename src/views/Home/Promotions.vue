<template>

  <div class="flex justify-center">
    <h1 class="title text-2xl m-10">PROMOTIONS</h1>
  </div>
  <div class="container">
    <div class="flex justify-center">
      <div class="wrapper">
        <ProductCard v-for="product in promo.products" :key="product.id" :product="product"/>
      </div>
    </div>
  </div>


</template>

<style scoped>

.wrapper {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2,minmax(0,1fr));
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

<script>
import ProductCard from "@/components/ProductCard.vue";
import {usehttpStore} from "@/stores/httpstore.js";
import {onMounted} from "vue";

export default {
  components: {ProductCard},
  setup() {
    const promo = usehttpStore();

    onMounted(() => {
      promo.fetchPromo();
    })

    return {promo};
  }
}

// export default {
//   data() {
//     return {
//       promotions: [
//         {
//           id: 1,
//           name: "promo1",
//           description: "ugolesang",
//           img: "Product_Ring.webp"
//         },
//         {
//           id: 2,
//           name: "promo2",
//           description: "professor",
//           img: "Product_Ring.webp"
//         },
//         {
//           id: 3,
//           name: "promo3",
//           description: "ugolecrack",
//           img: "Product_Ring.webp"
//         },
//         {
//           id: 4,
//           name: "promo4",
//           description: "zaketmatouetesvous?",
//           img: "Product_Ring.webp"
//         }
//       ]
//     }
//   }
// }
</script>