<script setup>

</script>

<template>

  <footer class="footer p-10 bg-base-200 text-base-content text-white font-pop">
    <div>
      <h6 class="footer-title">SHOP</h6>
      <RouterLink to="/shop"><p>Products</p></RouterLink>
      <p class="link link-hover">Craftsmans</p>
      <RouterLink to="/"><p class="link link-hover">Promotions</p></RouterLink>
      <RouterLink to="/"><p class="link link-hover">News</p></RouterLink>
    </div>
    <div>
      <h6 class="footer-title">LEARN</h6>
      <p class="link link-hover">About us</p>
      <p class="link link-hover">Contact</p>
    </div>
    <div>
      <h6 class="footer-title">LEGAL</h6>
      <p class="link link-hover">Terms of use</p>
      <p class="link link-hover">Privacy policy</p>
      <p class="link link-hover">Cookie policy</p>
    </div>
    <aside class="items-center grid-flow-col">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
           clip-rule="evenodd" class="fill-current">
        <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
      </svg>
      <p>CRFT Industries Ltd. <br>Providing reliable tech since 2024</p>
    </aside>
    <nav class="md:place-self-center md:justify-self-end">
      <div class="grid grid-flow-col gap-4">
        <a class="link link-neutral text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"/>
            <circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-miterlimit="10"
                    stroke-width="16"/>
            <rect x="32" y="32" width="192" height="192" rx="48" fill="none" stroke="currentColor"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
            <circle cx="180" cy="76" r="12"/>
          </svg>
        </a>
        <a class="link link-neutral text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"/>
            <path
                d="M168,102a95.55,95.55,0,0,0,56,18V80a56,56,0,0,1-56-56H128V156a28,28,0,1,1-40-25.31V88c-31.83,5.67-56,34.54-56,68a68,68,0,0,0,136,0Z"
                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
          </svg>
        </a>
        <a class="link link-neutral text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"/>
            <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="16"/>
            <path d="M168,88H152a24,24,0,0,0-24,24V224" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"/>
            <line x1="96" y1="144" x2="160" y2="144" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"/>
          </svg>
        </a>
      </div>
    </nav>
  </footer>

</template>

<style scoped>

 .footer {
   position : relative;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: rgba(0, 0, 0, 0.85);
 }

 h6 {
   color: #56b280;
 }

</style>