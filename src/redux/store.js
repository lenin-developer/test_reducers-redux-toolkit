import { configureStore } from '@reduxjs/toolkit';
import { saludar } from './slices/saludar';

export const store = configureStore({
  reducer: {
    saludar: saludar.reducer,
  },
});
