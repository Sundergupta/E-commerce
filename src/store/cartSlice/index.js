import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                item =>
                    item.id === newItem.id &&
                    item.size === newItem.size &&
                    item.color === newItem.color
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...newItem, quantity: 1 });
            }
        },
        removeFromCart(state, action) {
            const { id, size, color } = action.payload;
            state.cartItems = state.cartItems.filter(
                item =>
                    !(item.id === id && item.size === size && item.color === color)
            );
        },
        clearCart(state) {
            state.cartItems = [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
