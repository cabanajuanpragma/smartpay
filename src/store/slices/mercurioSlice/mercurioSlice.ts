import { MercurioConfig } from '@proteccionsa/merclijs/dist/mercurio-config';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MercurioState {
  config?: Partial<MercurioConfig>;
}

const initialState: MercurioState = {
  config: undefined
};

const mercurioSlice = createSlice({
  name: 'mercurio',
  initialState,
  reducers: {
    initializeMercurio(state, action: PayloadAction<MercurioConfig>) {
      state.config = action.payload;
    },
    resetMercurio(state) {
      state.config = undefined;
    }
  }
});

export const { initializeMercurio, resetMercurio } = mercurioSlice.actions;
export default mercurioSlice.reducer;
