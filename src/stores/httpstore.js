import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.baseURL=import.meta.env.VITE_API_URL;

export const usehttpStore = defineStore({
    id:'http',
    state:() => ({
        products : null,
        product : null,
        user : null,
        token : null,
    }),
    getters:{
        currentUser(){
          return this.user
        },
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
        async login(loginData){
            try{
                let response = await axios.post('auth/login', loginData)
                this.user = response.data.user
                this.token = response.data.token

                // setting the token for future request
                axios.defaults.headers.common = {
                    'Authorization': `Bearer ${token}`
                }
                // this.authenticated = true
                return this.user
            } catch (error) {
                console.log(error)
            }
        },
        logout(){
            this.user = null
            this.token = null
            delete axios.defaults.headers.common
        },

        async register(userData){
            try {
                return await axios.post('auth/register', userData)
            } catch (error) {
                console.log(error)
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
