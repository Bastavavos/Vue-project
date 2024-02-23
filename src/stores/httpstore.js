import { defineStore } from 'pinia';
import api_url from "@/services/api.js";

export const usehttpStore = defineStore({
    id: 'store',
    state: () => ({
        products : [],
        error : null
    }),
    getters: {

    },
    actions: {
        async fetchBest() {
            try {
                const response = await api_url.get("/products?limit=4")
                this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async fetchPromo() {
            try {
                const response = await api_url.get("/products?sort=asc")
                this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async fetchStore() {
            try {
                const response = await api_url.get("/products")
                this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
    },
});