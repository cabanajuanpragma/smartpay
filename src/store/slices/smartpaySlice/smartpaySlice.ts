import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

// TODO: Add a comment explaining the purpose of this slice and its reducers

interface SpinnerState {
  isLoading: boolean;
}

const initialState: SpinnerState = {
  isLoading: false
};

const smartPaySlice = createSlice({
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

export const { showSpinner, hideSpinner } = smartPaySlice.actions;
export const selectIsLoading = (state: RootState) => state.smartPay.isLoading;
export default smartPaySlice.reducer;
