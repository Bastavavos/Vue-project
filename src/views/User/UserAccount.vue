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

  <div class="pt-20">
    <form>
      <div class="flex justify-center text-2xl mt-9 mb-4 font-pop">
        <h1>My informations account</h1>
      </div>
      <div class="font-pop flex justify-center text-2xl mt-9 mb-4">
        <div>
          <div>
            <label for="first-name" class="text-sm">First name</label>
            <div class="flex flex-row mt-2 ">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                     class="border rounded p-2 mb-4"
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <button class="btn btn-ghost btn-circle">
                <i-ph-note-pencil class="h-5 w-5"></i-ph-note-pencil>
              </button>
            </div>
          </div>

          <div>
            <label for="last-name" class="text-sm">Last name</label>
            <div class="flex flex-row mt-2 ">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                     class="border rounded p-2 mb-4"
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <button class="btn btn-ghost btn-circle">
                <i-ph-note-pencil class="h-5 w-5"></i-ph-note-pencil>
              </button>
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email" class="text-sm">Email</label>
            <div class="flex flex-row mt-2 ">
              <input id="email" name="email" type="email" autocomplete="email"
                     class="border rounded p-2 mb-4"
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <button class="btn btn-ghost btn-circle">
                <i-ph-note-pencil class="h-5 w-5"></i-ph-note-pencil>
              </button>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="country" class="text-sm">Country</label>
            <div class="flex flex-row mt-2 ">
              <input id="country" name="country" autocomplete="country-name"
                     class="border rounded p-2 mb-4"
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <button class="btn btn-ghost btn-circle">
                <i-ph-note-pencil class="h-5 w-5"></i-ph-note-pencil>
              </button>
            </div>
          </div>

          <div class="col-span-full">
            <label for="street-address" class="text-sm">Street
              address</label>
            <div class="flex flex-row mt-2">
              <input type="text" name="street-address" id="street-address" autocomplete="street-address"
                     class="border rounded p-2 mb-4"
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <button class="btn btn-ghost btn-circle">
                <i-ph-note-pencil class="h-5 w-5"></i-ph-note-pencil>
              </button>
            </div>
          </div>

          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" class="text-sm">City</label>
            <div class="flex flex-row mt-2 ">
              <input type="text" name="city" id="city" autocomplete="address-level2"
                     class="border rounded p-2 mb-4"
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <button class="btn btn-ghost btn-circle">
                <i-ph-note-pencil class="h-5 w-5"></i-ph-note-pencil>
              </button>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label for="postal-code" class="text-sm">ZIP / Postal
              code</label>
            <div class="flex flex-row mt-2 ">
              <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code"
                     class="border rounded p-2 mb-4"
                     :class="{'input-bg-light': !isDarkTheme, 'input-bg-dark': isDarkTheme}">
              <button class="btn btn-ghost btn-circle">
                <i-ph-note-pencil class="h-5 w-5"></i-ph-note-pencil>
              </button>
            </div>
          </div>
        </div>

      </div>

      <div class="flex justify-center mb-36 font-pop pt-10 pr-12">
        <button type="submit" class="btn btn2 text-white">Save changes</button>
      </div>
    </form>
  </div>


</template>

<style scoped>
.btn2 {
  border: unset;
  border-radius: 5px;
  background-color: #56b280;
}
</style>