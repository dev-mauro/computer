import { configureStore } from '@reduxjs/toolkit';
import { darkModeSlice } from './DarkModeSlice';

const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
  }
});

export { store }