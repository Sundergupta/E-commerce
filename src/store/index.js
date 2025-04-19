// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice';
import authSlice from './substore/index';
import cardSlice from './cardSlice';
import setSelectedProduct from './productPageSilce'; // ✅ add this line
import cartReducer from './cartSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        auth: authSlice,
        card: cardSlice,
        product: setSelectedProduct, // ✅ add this line
        cart: cartReducer
    },
});
