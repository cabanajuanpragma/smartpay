import { RootState } from '@/store/store';
import { ProfilerFormState } from '@/types';

import spinnerReducer, { selectIsLoading } from './spinnerSlice';

describe('spinnerSlice tests', () => {
  it('should show spinner', () => {
    const initialState = { isLoading: false };
    const action = { type: 'spinner/showSpinner' };

    const result = spinnerReducer(initialState, action);

    expect(result.isLoading).toBe(true);
  });

  it('should hide spinner', () => {
    const initialState = { isLoading: true };
    const action = { type: 'spinner/hideSpinner' };

    const result = spinnerReducer(initialState, action);

    expect(result.isLoading).toBe(false);
  });

  it('should return initial state', () => {
    const initialState = { isLoading: true };
    const action = { type: 'unknown' };

    const result = spinnerReducer(initialState, action);

    expect(result).toEqual(initialState);
  });

  it('should select isLoading', () => {
    const state: RootState = {
      spinner: { isLoading: true },
      profilerForm: {} as ProfilerFormState
    };

    const result = selectIsLoading(state);

    expect(result).toBe(true);
  });
});
