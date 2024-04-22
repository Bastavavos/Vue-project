<text align="center">

# - CraftedBy -

**frontend-VueJS-project**

</text>

<p align="center">
<img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white" alt="axios">
<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="node">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind">
<img src="https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="vue-js">
</p>

**Initialisation :**
````
npm install 
````
````
nvm use 20
````
````
npm run dev 
````

**Axios :**
````
npm install axios
````
**Folders to be created at the root of the project :**

tailwind.config.js : 
````
import daisyui from "daisyui"

export default {
   content: ['./src/**/*.{vue,js,ts}'],
   plugins: [daisyui]
};
````
postcss.config.js :
````
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

export default {
    plugins: [tailwindcss, autoprefixer],
};
````
Set-up icons auto-import : 
````
npm i -D unplugin-icons
````
````
npm i -D @iconify-json/ph
````
File vite.config.js :
````
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default {
   plugins: [
     Vue(),
     Components({
         resolvers: [
            IconsResolver(),
         ],
     }),
     Icons(),
   ],
}
````
