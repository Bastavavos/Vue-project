import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.baseURL=import.meta.env.VITE_API_URL;

export const usehttpStore = defineStore({
    id:'http',
    state:() => ({
        products : null,
        product : null
    }),
    getters:{

    },
    actions:{
        async getProducts(){
            try {
                let response = await axios.get("/products")
                this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async getProduct(id){
            try {
                let response = await axios.get("/products/"+id)
                this.product = response.data;
                return this.product
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        },

    }
})

// export const usehttpStore = defineStore({
//     id: 'store',
//     state: () => ({
//         products : [],
//         error : null
//     }),
//     getters: {
//
//     },
//     actions: {
//         async fetchBest() {
//             try {
//                 const response = await api_url.get("/products?limit=4")
//                 this.products = response.data;
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         },
//         async fetchPromo() {
//             try {
//                 const response = await api_url.get("/products?sort=asc")
//                 this.products = response.data;
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         },
//         async fetchStore() {
//             try {
//                 const response = await api_url.get("/products")
//                 this.products = response.data;
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         },
//         async fetchOneProduct() {
//             try {
//                 const response = await api_url.get("/products/${id}")
//                 this.products = response.data;
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         },
//     },
// });