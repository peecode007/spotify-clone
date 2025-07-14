import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from './services/shazamCore'; // ✅ Import your API
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer, // ✅ Add API reducer
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware), // ✅ Add API middleware
});
