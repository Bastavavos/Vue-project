import { defineStore } from 'pinia';
import {computed, ref} from "vue";

export const useItemsStore = defineStore({
    id: 'items',
    state: () => ({
        items: [],
    }),
    getters: {
        // Define getters here if needed
    },
    actions: {
        addItem(item) {
            this.items.push(item);
        },
        removeItem(itemId) {
            this.items = this.items.filter(item => item.id !== itemId);
        },
    },
});
