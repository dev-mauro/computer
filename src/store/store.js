import { configureStore } from '@reduxjs/toolkit';
import { darkModeSlice } from './DarkModeSlice';
import { cartSlice } from './cartSlice';

const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    cart: cartSlice.reducer,
  }
});

export { store }