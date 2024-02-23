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
            // console.log(this.items)
        },
        removeItem(currentItem) {
                this.items = this.items.filter(item => item.id !== currentItem.id)
        },
    },
});

