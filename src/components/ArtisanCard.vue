<script>
import {RouterLink} from "vue-router";

export default {
  components: {RouterLink},
  props: {
    artisan: Object,
  },
}
</script>

<template>
    <div class="card shadow-lg mb-1 font-pop">
      <div class="card-body items-center text-center p-2">
        <h2 class="card-title">{{ artisan.firstname }} {{ artisan.lastname }}</h2>
        <figure class="h-56 w-56">
          <img :src="artisan.image" alt="Artisan" class="object-cover">
        </figure>
        <p>Contact : {{ artisan.email }}</p>

        <RouterLink :to="`/artisan/${artisan.id}`">
          <p id="back">See more</p>
        </RouterLink>

      </div>
    </div>
</template>

<style scoped>
.card {
  border-radius: unset;
}
#back {
  color: #56b280;
  text-decoration: underline;
}
</style>