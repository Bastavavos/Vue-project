<script>
export default {
  data() {
    return {
      isDarkTheme: false,
    }
  }
}
</script>

<template>
  <div class="pt-16">
    <div class="flex justify-center items-center">
      <img class="lg:w-full" src="/src/assets/LandingCrafted.webp" alt="CraftedBy bg">
      <!--    <img src="https://www.cma77.fr/uploads/_crma_77/actualite/adobestock-374274031.jpeg" alt="Craft"/>-->
      <div class="absolute z-10 bg-white/70 text-center px-8 sm:px-14 md:px-10 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16">
        <h1 class="font-pop text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          The know-how of Artisans
        </h1>
        <h2 class="font-pop text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl pt-4 sm:pt-5 md:pt-6 lg:pt-7 xl:pt-8">
          Each product has been handmade by expert artisans in their category.
        </h2>
        <button class="btn font-robo text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mr-2 sm:mr-4 md:mr-6 lg:mr-8 xl:mr-10 ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10 mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          <RouterLink to="/shop">Discover our collection</RouterLink>
        </button>
      </div>
    </div>
  </div>

  <div class="pt-6 sm:px-2 md:px-6 lg:px-20">
    <div class="flex justify-center text-center mt-8 text-2xl font-pop pb-5">
      <h1>Our project</h1>
    </div>
    <div class="about flex justify-center m-8 text-center font-robo">
      <p>
        Inter quos Paulus eminebat notarius ortus in Hispania, glabro quidam sub vultu latens,
        odorandi vias periculorum occultas perquam sagax.
        is in Brittanniam missus ut militares quosdam perduceret ausos conspirasse Magnentio,
        cum reniti non possent, iussa licentius supergressus fluminis modo fortunis conplurium sese repentinus infudit et
        ferebatur per strages multiplices ac ruinas,
        vinculis membra ingenuorum adfligens et quosdam.
      </p>
    </div>
    <div class="flex row">
      <div class="about flex justify-center m-8 text-center font-robo">
        <p>
          Inter quos Paulus eminebat notarius ortus in Hispania, glabro quidam sub vultu latens,
          odorandi vias periculorum occultas perquam sagax.
          is in Brittanniam missus ut militares quosdam perduceret ausos conspirasse Magnentio,
          cum reniti non possent, iussa licentius supergressus fluminis modo fortunis conplurium sese repentinus infudit et
          ferebatur per strages multiplices ac ruinas,
          vinculis membra ingenuorum adfligens et quosdam.
        </p>
      </div>
      <div class="about flex justify-center m-8 text-center font-robo">
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
  </div>
</template>


<style scoped>

.btn {
  border: unset;
  border-radius: 5px;
  background-color: #56b280;
}
</style>