import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardItems: []
};

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addToCard(state, action) {
            const existingItem = state.cardItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cardItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCard(state, action) {
            state.cardItems = state.cardItems.filter(item => item.id !== action.payload);
        },
        clearCard(state) {
            state.cardItems = [];
        }
    }
});

export const { addToCard, removeFromCard, clearCard } = cardSlice.actions;
export default cardSlice.reducer;
