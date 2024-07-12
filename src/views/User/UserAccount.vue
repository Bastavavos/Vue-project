<script setup>
</script>

<template>
  <form>
    <div class="flex justify-center text-2xl mt-9 mb-4 font-pop">
      <h1>My informations account</h1>
    </div>
        <div class="font-pop flex justify-center text-2xl mt-9 mb-4">
          <div>
              <div>
                <label for="first-name" class="text-sm">First name</label>
                <div class="mt-2">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                         class="border rounded p-2 mb-4 bg-white">
                </div>
              </div>

              <div>
                <label for="last-name" class="block text-sm leading-6 text-gray-900">Last name</label>
                <div class="mt-2">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                         class="border rounded p-2 mb-4 bg-white">                </div>
              </div>

              <div class="sm:col-span-4">
                <label for="email" class="block text-sm leading-6 text-gray-900">Email</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email"
                         class="border rounded p-2 mb-4 bg-white">                 </div>
              </div>

              <div class="sm:col-span-3">
                <label for="country" class="block text-sm leading-6 text-gray-900">Country</label>
                <div class="mt-2">
                  <input id="country" name="country" autocomplete="country-name"
                         class="border rounded p-2 mb-4 bg-white">                 </div>
              </div>

              <div class="col-span-full">
                <label for="street-address" class="block text-sm leading-6 text-gray-900">Street
                  address</label>
                <div class="mt-2">
                  <input type="text" name="street-address" id="street-address" autocomplete="street-address"
                         class="border rounded p-2 mb-4 bg-white">                 </div>
              </div>

              <div class="sm:col-span-2 sm:col-start-1">
                <label for="city" class="block text-sm leading-6 text-gray-900">City</label>
                <div class="mt-2">
                  <input type="text" name="city" id="city" autocomplete="address-level2"
                         class="border rounded p-2 mb-4 bg-white">                 </div>
              </div>

              <div class="sm:col-span-2">
                <label for="postal-code" class="block text-sm leading-6 text-gray-900">ZIP / Postal
                  code</label>
                <div class="mt-2">
                  <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code"
                         class="border rounded p-2 mb-4 bg-white">                 </div>
              </div>
            </div>

        </div>

        <div class="flex justify-center space-x-2 mb-12 font-pop">
          <button type="button" class="btn text-white">Cancel</button>
          <button type="submit" class="btn text-white">Save</button>
        </div>
  </form>


</template>

<style scoped>
.btn {
  border: unset;
  border-radius: 5px;
  background-color: #56b280;
}
</style>