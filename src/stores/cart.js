import { defineStore } from 'pinia';
import {computed} from "vue";

export const useItemsStore = defineStore({
    id: 'items',
    state: () => ({
        items: [],
    }),
    getters: {
        totalPrice: (state) => computed(() => {
            const total = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
            return parseFloat(total.toFixed(2));
            // return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        }),
        cartItemCount: (state) => computed(() =>  {
            const total = state.items.reduce((total, item) => total + item.quantity, 0);
            // Si le total est supérieur à 0, retourne le total, sinon retourne une chaîne vide ou un autre élément HTML qui affiche rien
            return total > 0 ? total : undefined;
            // return state.items.reduce((total, item) => total + item.quantity, 0);
        }),
    },
    actions: {
        addItem(item) {
            // Check if the item is already in the cart
            const existingItem = this.items.find(i => i.id === item.id);
            if (existingItem) {
                // If the item is already in the cart, increment its quantity
                existingItem.quantity += 1;
            } else {
                // If the item is not in the cart, add it with a quantity of 1
                this.items.push({...item, quantity: 1});
            }
        },
        removeItem(currentItem) {
            // Find the item in the cart
            const itemIndex = this.items.findIndex(item => item.id === currentItem.id);
            if (itemIndex !== -1) {
                // If the item is found, decrement its quantity
                this.items[itemIndex].quantity -= 1;
                // If the quantity reaches 0, remove the item from the cart
                if (this.items[itemIndex].quantity <= 0) {
                    this.items.splice(itemIndex, 1);
                }
            }
        },
        removeAllItems() {
            this.items = [];
        },
    },
});

