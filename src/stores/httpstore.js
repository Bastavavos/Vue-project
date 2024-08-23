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
        artisans: null,
        artisan: null,
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
        async updateUser(userData){
            try {
                let response = await axios.put('/users/'+this.user.id, userData)
                this.user = response.data;
                return response.data;
            } catch (error) {
                console.log(error)
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
        async getArtisans(){
            try {
                let response = await axios.get("/artisans")
                this.artisans = response.data;
            } catch (error) {
                console.error('Error fetching artisans:', error);
            }
        },
        async getProduct(id){
            try {
                let response = await axios.get("/products/"+id)
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error('Error fetching product:', error);
                return {};
            }
        },
        async getArtisan(id){
            try {
                let response = await axios.get("/artisans/"+id)
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error('Error fetching artisan:', error);
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

        async productsByUserId(userId) {
            try {
                let response = await axios.get(`/products/user/${userId}`);
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },

        async setProducts(fetchedProducts) {
            this.products = fetchedProducts;
        },

        async getProductFilters(categoryId, styleId, materialId) {
            try {
                let response = await axios.get(`/products/filter/${categoryId}/${styleId}/${materialId}`);
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },

        async createProduct(productData) {
            try {
                return await axios.post('/products', productData);
                // this.product = null;
                // return response.data;
            } catch (error) {
                console.error(error);
            }
        }
    },
})