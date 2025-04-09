import { configureStore } from '@reduxjs/toolkit';

import smartPayReducer from './slices/smartpaySlice/smartpaySlice';

const store = configureStore({
  reducer: {
    smartPay: smartPayReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
