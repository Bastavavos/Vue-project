import { defineStore } from 'pinia';
import {computed} from "vue";

export const useItemsStore = defineStore({
    id: 'items',
    state: () => ({
        items: [],
    }),
    getters: {
        totalPrice: (state) => computed(() => {
            return state.items.reduce((total, item) => total + item.price, 0);
        }),
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

