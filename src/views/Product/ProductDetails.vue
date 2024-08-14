<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usehttpStore } from "@/stores/httpstore.js";
import {useItemsStore} from "@/stores/cart.js";

export default {
  setup() {
    const details = ref(null);
    const route = useRoute();
    const httpStore = usehttpStore();
    const itemStore = useItemsStore();

    const fetchProduct = async () => {
      const productId = route.params.id;
      details.value = await httpStore.getProduct(productId);
    };
    onMounted(fetchProduct);
    return { details, itemStore };
  }
};
</script>

<template>
  <div class="pt-20 shadow-lg">
    <div v-if="details" class="card shadow-lg mb-1 font-pop mx-64 pt-10">
      <figure class="img p-2">
        <img :src="details.product.image" alt="Product" class="h-32 w-28">
      </figure>
      <div class="card-body items-center text-center p-2">
        <h2 class="card-title">{{ details.product.name }}</h2>
        <p>{{ details.product.description }}</p>

        <p class="font-bold text-xl" id="price">{{ details.product.price }} $</p>
        <div class="card-actions">
          <button @click="itemStore.addItem(details.product)" class="btn text-white mb-2">
            <i-ph-bag class="h-4 w-4"></i-ph-bag>
            Add to cart
          </button>
        </div>
      </div>
    </div>

    <div v-else class="p-72 flex justify-center">
      <button type="button" class="" disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
        Loading product details ...
      </button>
    </div>
  </div>

</template>

<style scoped>
.btn {
  border: unset;
  border-radius: 5px;
  background-color: #56b280;
}
#price {
  color: #56b280;
}
</style>

<!--Test with props : -->

<!--<script>-->
<!--import {RouterLink} from "vue-router";-->
<!--import axios from "axios";-->

<!--export default {-->
<!--  components: {RouterLink},-->
<!--  name: 'ProductDetails',-->
<!--  props: ['id'],-->
<!--  data() {-->
<!--    return {-->
<!--      product: null-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    this.fetchProduct();-->
<!--  },-->
<!--  methods: {-->
<!--    async fetchProduct() {-->
<!--      try {-->
<!--        const response = await axios.get(`/products/${this.id}`);-->
<!--        this.product = response.data;-->
<!--      } catch (error) {-->
<!--        console.error('Erreur lors de la récupération du produit:', error);-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <div class="pt-20 px-36 pb-20">-->
<!--    <h2 class="card-title">{{ id }}</h2>-->
<!--  </div>-->
<!--</template>-->