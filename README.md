# VueJS
**Guide d'installation**
````
# lancement du projet :
- npm install (dans dossier projet)
- npm run dev (run serveur)

````
````
# axios :
npm install axios

````
````
# dossiers a creer a la racine du projet : 

tailwind.config.js -->
"import daisyui from "daisyui"

export default {
content: ['./src/**/*.{vue,js,ts}'],
plugins: [daisyui]
};"

postcss.config.js -->
"import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

export default {
plugins: [tailwindcss, autoprefixer],
};"

````
````
# icons auto-import : 
- npm i -D unplugin-icons
- npm i -D @iconify-json/ph
````
````
# dans "vite.config.js" :
"import Vue from '@vitejs/plugin-vue'
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
}"
````
