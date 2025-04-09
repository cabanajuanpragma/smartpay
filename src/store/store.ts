import { configureStore } from '@reduxjs/toolkit';

import mercudioReducer from './slices/mercurioSlice/mercurioSlice';
import profilerFormReducer from './slices/profileFormSlice/profilerFormSlice';
import spinnerReducer from './slices/spinnerSlice/spinnerSlice';

const store = configureStore({
  reducer: {
    profilerForm: profilerFormReducer,
    spinner: spinnerReducer,
    mercurio: mercudioReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
