<script>
import {usehttpStore} from "@/stores/httpstore.js";
import {useItemsStore} from "@/stores/cart.js";
import {RouterLink} from "vue-router";

export default {
  components: {RouterLink},
 data() {
   return {
     product:null
   }
 },
  methods:{
   async fetchProduct(){
     const httpStore = usehttpStore()
     this.product = await httpStore.getProduct(this.$route.params.id)
     console.log(this.product)
   }
  },
  created() {
    this.fetchProduct()
  },
  setup() {
    const itemStore = useItemsStore();
    return {
      itemStore,
    };
  },
}
</script>

<template>

  <div class="card">
    <figure class="img p-2">
      <img :src="product?.image" alt="Product" class="h-32 w-28">
    </figure>
    <div class="card-body items-center text-center p-2">
      <h2 class="card-title">{{product?.title}}</h2>
      <p>{{product?.description}}</p>
      <p class="font-bold text-xl" id="price">${{product?.price}}</p>

      <div class="card-actions mt-5">
        <button class="btn-2 p-1">color</button>
        <button class="btn-2 p-1">color</button>
        <button class="btn-2 p-1">color</button>
      </div>

      <select class="select select-bordered w-40 m-5 bg-white">
        <option disabled selected>Materials</option>
        <option>material 1</option>
        <option>material 2</option>
      </select>


      <div class="card-actions mb-5 font-pop">
        <RouterLink to="/user-cart">
          <button @click="itemStore.addItem(product)" class="btn text-white mb-2 mt-6">
            <i-ph-bag class="h-4 w-4"></i-ph-bag>
            <p>+</p> Add to cart
          </button>
        </RouterLink>
      </div>
    </div>
  </div>

</template>

<style scoped>

.card {
  border-radius: unset;
  /*border: solid 1px;*/
  font-family: sans-serif;
}

.btn {
  border: unset;
  border-radius: 5px;
  background-color: #56b280;
}

.btn-2 {
  border: solid 1px;
  border-radius: unset;
  background-color: white;
  font-family: sans-serif;
}

.img {
  border-bottom: solid 1px ;
  border-color: rgba(0, 0, 0, 0.1);
}

#price {
  color: #56b280;
}
</style>