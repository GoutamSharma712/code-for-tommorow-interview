// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import { userProfileService } from '../services/userProfileService';
import cardSlice from './Feature/userProfileSlice';

export const store = configureStore({
  reducer: {
    card:cardSlice,
    // Add other reducers here
    [userProfileService.reducerPath]: userProfileService.reducer,
  
  },
  middleware  : (getDefaultMiddleware)=>getDefaultMiddleware().concat(userProfileService.middleware)

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
