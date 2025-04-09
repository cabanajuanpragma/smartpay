import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

interface SpinnerState {
  isLoading: boolean;
}

const initialState: SpinnerState = {
  isLoading: false
};

const spinnerSlice = createSlice({
  name: 'spinner',
  initialState,
  reducers: {
    showSpinner(state) {
      state.isLoading = true;
    },
    hideSpinner(state) {
      state.isLoading = false;
    }
  }
});

export const { showSpinner, hideSpinner } = spinnerSlice.actions;
export const selectIsLoading = (state: RootState) => state.spinner.isLoading;
export default spinnerSlice.reducer;
