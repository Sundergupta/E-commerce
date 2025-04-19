// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = {
                ...action.payload,
                cartId: Date.now() + Math.random(), // unique ID
                quantity: 1,
            };
            state.cartItems.push(newItem); // Always add a fresh copy
        },

        removeFromCart(state, action) {
            const { cartId } = action.payload;
            state.cartItems = state.cartItems.filter(
                item => item.cartId !== cartId
            );
        },

        clearCart(state) {
            state.cartItems = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
