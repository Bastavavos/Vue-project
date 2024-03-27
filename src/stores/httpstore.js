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
        async getBest() {
            try {
                const response = await axios.get("/products?limit=4")
                this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async getPromo() {
            try {
                const response = await axios.get("/products?sort=asc")
                this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },

    }
})
