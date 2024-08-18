<script>
import {usehttpStore} from "@/stores/httpstore.js";
import ArtisanCard from "@/components/ArtisanCard.vue";
import { onMounted } from "vue";


export default {
  components: {ArtisanCard},
  setup() {
    const list = usehttpStore();
    onMounted(() => {
      list.getArtisans();
    });
    return {list};
  },
  data() {
    return {
      isDarkTheme: false,
    };
  },
}
</script>

<template>
  <div class="pt-20">
    <div class="flex justify-center pb-3">
      <h1 class="title text-2xl mt-10 font-pop">CRAFTSMANS</h1>
    </div>
    <div class="container">
      <div class="flex justify-center pt-10 pb-28">
        <div class="wrapper">
          <ArtisanCard v-for="artisan in list.artisans" :key="artisan.id" :artisan="artisan"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
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