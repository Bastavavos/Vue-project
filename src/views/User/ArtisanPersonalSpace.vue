<script>
import { defineComponent, onMounted, ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import { usehttpStore } from "@/stores/httpstore.js";

export default defineComponent({
  components: { ProductCard },
  setup() {
    const httpStore = usehttpStore();
    const artisanProducts = ref([]);
    const user = httpStore.user;

    onMounted(async () => {
      if (user && user.id) {
        try {
          artisanProducts.value = await httpStore.productsByUserId(user.id);
        } catch (error) {
          console.error('Failed to load products:', error);
        }
      } else {
        console.error('User ID is not defined.');
      }
    });
    return { artisanProducts, user };
  }
});
</script>

<template>
  <div class="pt-20 px-36 pb-20">
        <div class="flex items-center font-pop">
          <i-ph-user-circle class="h-48 w-48"></i-ph-user-circle>
          <div class="flex flex-row">
            <div class="flex flex-col">
              <strong class="text-2xl">Artisan Name</strong>
              <span class="text-xl">Technical advisor</span>
            </div>
            <div class="pl-44 pt-4">
              <span class="text-xl italic">"Inter quos Paulus eminebat notarius ortus in Hispania"</span>
            </div>
          </div>
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
              cum reniti non possent, iussa licentius supergressus fluminis modo fortunis conplurium sese repentinus infudit et
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
              cum reniti non possent, iussa licentius supergressus fluminis modo fortunis conplurium sese repentinus infudit et
              ferebatur per strages multiplices ac ruinas,
              vinculis membra ingenuorum adfligens et quosdam.
            </p>
          </div>
        </div>
    <div class="flex flex-row card shadow-lg justify-center pb-3 px-16">
      <div class="basis-1/4">
        <h1 class="title text-xl mt-10 font-pop">My Products</h1>
        <div class="font-pop pt-52">
          Do you want a customized product ?
        </div>
        <div class="font-pop pt-16">
          Contact me at this address :
        </div>
        <div class="font-pop pt-5">
          example@mail.com
        </div>
      </div>
      <div class="basis-3/4 about flex justify-center m-8 text-center font-robo">
        <div class="wrapper">
          <ProductCard v-for="product in artisanProducts" :key="product.id" :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(3,minmax(0,1fr));
  grid-auto-rows: auto;
}
</style>






<!--<script>-->
<!--import {defineComponent, onMounted} from "vue";-->
<!--import ProductCard from "@/components/ProductCard.vue";-->
<!--import {usehttpStore} from "@/stores/httpstore.js";-->

<!--export default defineComponent({-->
<!--  components: {ProductCard},-->
<!--  setup() {-->
<!--    const promo = usehttpStore();-->
<!--    onMounted(() => {-->
<!--      promo.getPromoProducts();-->
<!--    })-->
<!--    return {promo};-->
<!--  }-->
<!--})-->
<!--</script>-->

<!--<template>-->
<!--  <div class="pt-20 px-36 pb-20">-->

<!--    <div class="flex items-center font-pop">-->
<!--      <i-ph-user-circle class="h-48 w-48"></i-ph-user-circle>-->
<!--      <div class="flex flex-row">-->
<!--        <div class="flex flex-col">-->
<!--          <strong class="text-2xl">Artisan Name</strong>-->
<!--          <span class="text-xl">Technical advisor</span>-->
<!--        </div>-->
<!--        <div class="pl-44 pt-4">-->
<!--          <span class="text-xl italic">"Inter quos Paulus eminebat notarius ortus in Hispania"</span>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->

<!--    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">-->
<!--    <div class="flex flex-row card shadow-lg justify-center pb-3 px-16">-->
<!--      <div class="basis-1/4">-->
<!--        <h1 class="title text-xl mt-10 font-pop">My story</h1>-->
<!--      </div>-->
<!--      <div class="basis-3/4 about m-8 font-robo">-->
<!--        <p>-->
<!--          Inter quos Paulus eminebat notarius ortus in Hispania, glabro quidam sub vultu latens,-->
<!--          odorandi vias periculorum occultas perquam sagax.-->
<!--          is in Brittanniam missus ut militares quosdam perduceret ausos conspirasse Magnentio,-->
<!--          cum reniti non possent, iussa licentius supergressus fluminis modo fortunis conplurium sese repentinus infudit et-->
<!--          ferebatur per strages multiplices ac ruinas,-->
<!--          vinculis membra ingenuorum adfligens et quosdam.-->
<!--        </p>-->
<!--      </div>-->
<!--    </div>-->

<!--    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">-->
<!--    <div class="flex flex-row card shadow-lg justify-center pb-3 px-16">-->
<!--      <div class="basis-1/4">-->
<!--        <h1 class="title text-xl mt-10 font-pop">My Speciality</h1>-->
<!--      </div>-->
<!--      <div class="basis-3/4 about m-8 font-robo">-->
<!--        <p>-->
<!--          Inter quos Paulus eminebat notarius ortus in Hispania, glabro quidam sub vultu latens,-->
<!--          odorandi vias periculorum occultas perquam sagax.-->
<!--          is in Brittanniam missus ut militares quosdam perduceret ausos conspirasse Magnentio,-->
<!--          cum reniti non possent, iussa licentius supergressus fluminis modo fortunis conplurium sese repentinus infudit et-->
<!--          ferebatur per strages multiplices ac ruinas,-->
<!--          vinculis membra ingenuorum adfligens et quosdam.-->
<!--        </p>-->
<!--      </div>-->
<!--    </div>-->

<!--    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">-->
<!--    <div class="flex flex-row card shadow-lg justify-center pb-3 px-16">-->
<!--      <div class="basis-1/4">-->
<!--        <h1 class="title text-xl mt-10 font-pop">My Products</h1>-->
<!--        <div class="font-pop pt-52">-->
<!--          Do you want a customized product ?-->
<!--        </div>-->
<!--        <div class="font-pop pt-16">-->
<!--          Contact me at this address :-->
<!--        </div>-->
<!--        <div class="font-pop pt-5">-->
<!--          example@mail.com-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="basis-3/4 about flex justify-center m-8 text-center font-robo">-->
<!--        <div class="wrapper">-->
<!--          <ProductCard v-for="product in promo.promoProducts" :key="product.id" :product="product"/>-->
<!--        </div>-->

<!--      </div>-->
<!--    </div>-->

<!--  </div>-->
<!--</template>-->

