// store/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedProduct: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSelectedProduct(state, action) {
            state.selectedProduct = action.payload;
            console.log("Selected product:", action.payload); // just for debugging
        },
    },
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
