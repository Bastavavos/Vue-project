<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usehttpStore } from "@/stores/httpstore.js";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: {ProductCard},
  setup() {
    const info = ref(null);
    const route = useRoute();
    const httpStore = usehttpStore();
    const products = ref([]);

    const fetchArtisan = async () => {
      const ArtisanId = route.params.id;
      info.value = await httpStore.getArtisan(ArtisanId);
      if(ArtisanId) {
        products.value = await httpStore.productsByUserId(ArtisanId);
      }
    };

    onMounted(fetchArtisan);
    return { info, products };
  }
};
</script>

<template>
  <div class="pt-20 px-36 pb-20">

    <div v-if="info" class="font-pop pt-10">
      <div class="card-body items-center text-center">
        <figure class="h-56 w-56">
          <img :src="info.user.image" alt="Artisan" class="object-cover">
        </figure>
        <h2 class="card-title">{{ info.user.firstname }} {{ info.user.lastname }}</h2>
        <p>Contact : {{ info.user.email }}</p>
      </div>
    </div>

    <div v-else class="p-72 flex justify-center font-pop">
      <button type="button" class="" disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
        Loading artisan page ...
      </button>
    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <div class="flex flex-row card shadow-lg justify-center pb-3 px-16">
      <div class="basis-1/4">
        <h1 class="title text-xl mt-10 font-pop">My story</h1>
      </div>
      <div class="basis-3/4 about m-8 font-robo">
        <p>
          Inter quos Paulus eminebat notarius ortus in Hispania, glabro quidam sub vultu latens,
          odorandi vias periculorum occultas perquam sagax.
          is in Brittanniam missus ut militares quosdam perduceret ausos conspirasse Magnentio,
          cum reniti non possent, iussa licentius supergressus fluminis modo fortunis conplurium sese repentinus infudit
          et
          ferebatur per strages multiplices ac ruinas,
          vinculis membra ingenuorum adfligens et quosdam.
        </p>
      </div>
    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <div class="flex flex-row card shadow-lg justify-center pb-3 px-16">
      <div class="basis-1/4">
        <h1 class="title text-xl mt-10 font-pop">My Speciality</h1>
      </div>
      <div class="basis-3/4 about m-8 font-robo">
        <p>
          Inter quos Paulus eminebat notarius ortus in Hispania, glabro quidam sub vultu latens,
          odorandi vias periculorum occultas perquam sagax.
          is in Brittanniam missus ut militares quosdam perduceret ausos conspirasse Magnentio,
          cum reniti non possent, iussa licentius supergressus fluminis modo fortunis conplurium sese repentinus infudit
          et
          ferebatur per strages multiplices ac ruinas,
          vinculis membra ingenuorum adfligens et quosdam.
        </p>
      </div>
    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
    <div class="flex flex-row card shadow-lg justify-center pb-3 px-16 mt-10">
      <div class="basis-1/4">
        <h1 class="title text-xl mt-10 font-pop">My Products</h1>
        <div class="font-pop pt-20">
          Do you want a customized product ?
        </div>
      </div>

      <div v-if="products" class="basis-3/4 about flex justify-center m-8 text-center font-robo">
        <div class="wrapper">
          <ProductCard v-for="product in products" :key="product.id" :product="product"/>
        </div>
      </div>
      <div v-else class="p-72 flex justify-center font-pop">
        <button type="button" class="" disabled>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          </svg>
          Loading products ...
        </button>
      </div>
    </div>
  </div>

</template>

<style scoped>
.wrapper {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4,minmax(0,1fr));
  grid-auto-rows: auto;
}
</style>