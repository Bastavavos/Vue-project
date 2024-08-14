import { defineStore } from 'pinia';
import axios from 'axios';
import {computed} from "vue";

axios.defaults.baseURL=import.meta.env.VITE_API_URL;

export const usehttpStore = defineStore({
    id:'http',
    state:() => ({
        products : null,
        product : null,
        promoProducts: null,
        randomProducts: null,
        user : null,
        token : null,
    }),
    getters:{
        currentUser(){
          return this.user
        },
    },
    actions:{
        async register(userData){
            try {
                return await axios.post('auth/register', userData)
            } catch (error) {
                console.log(error)
            }
        },
        async login(loginData, token){
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
        async logout(token) {
            try {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                let response = await axios.post('auth/logout');
                delete axios.defaults.headers.common['Authorization'];
                this.user = null;
                this.token = null;
                return response.data;
            } catch (error) {
                console.log(error);
                this.user = null;
                this.token = null;
            }
        },
        async getProducts(){
            try {
                let response = await axios.get("/products")
                this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async getRandomProducts() {
            try {
                let response = await axios.get("/products");
                let allProductsArray = Array.isArray(response.data) ? response.data : [];
                const randomIndices = Array.from({ length: 3 }, () => Math.floor(Math.random() * allProductsArray.length));
                this.randomProducts = randomIndices.map(index => allProductsArray[index]);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async getPromoProducts() {
            try {
                let response = await axios.get("/products");
                this.promoProducts = response.data.length > 0 ? response.data.sort((a, b) => a.price - b.price).slice(0, 6) : [];
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },

        async getProduct(id){
            try {
                let response = await axios.get("/products/"+id)
                console.log(response.data);
                return response.data;
                // return this.product
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        },


        async getProductFilters(categoryId, styleId, materialId){
            try {
                let url = `/products/filter`;

                const params = [];
                if(categoryId) params.push(`categoryId=${categoryId}`);
                if(styleId) params.push(`styleId=${styleId}`);
                if(materialId) params.push(`materialId=${materialId}`);

                if(params.length > 0) {
                    url += '?' + params.join('&');
                }
                let response = await axios.get(url);

                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        },
        // async getProductsByCategory(categoryId) {
        //     try {
        //         let response = await axios.get(`/products/category/${categoryId}`);
        //         this.products = response.data;
        //     } catch (error) {
        //         console.error('Error fetching products by category:', error);
        //     }
        // },
        // async getProductsByStyle(styleId) {
        //     try {
        //         let response = await axios.get(`/products/style/${styleId}`);
        //         this.products = response.data;
        //     } catch (error) {
        //         console.error('Error fetching products by style:', error);
        //     }
        // },
        // async getProductsByMaterial(materialId) {
        //     try {
        //         let response = await axios.get(`/products/material/${materialId}`);
        //         this.products = response.data;
        //     } catch (error) {
        //         console.error('Error fetching products by material:', error);
        //     }
        // },
    },
})