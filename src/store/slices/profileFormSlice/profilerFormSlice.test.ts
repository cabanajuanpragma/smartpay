import { ProfilerFormState } from '@/types';
import { PROFILER_INITIAL_STATE } from '@/utils/constants';

import profilerFormReducer, {
  nextStep,
  previousStep,
  nextSubStep,
  previousSubStep,
  updateBasicData,
  updateFormData,
  resetForm,
  checkBasicInfo,
  checkOnboardingStatus
} from './profilerFormSlice';

describe('profilerFormSlice reducer', () => {
  const initialState: ProfilerFormState = PROFILER_INITIAL_STATE;

  it('should handle initial state', () => {
    expect(profilerFormReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle nextStep', () => {
    const previousState = { ...initialState };
    const nextState = profilerFormReducer(previousState, nextStep());
    expect(nextState.step).toBe(1);
  });

  it('should handle previousStep', () => {
    const previousState = { ...initialState, step: 1 };
    const nextState = profilerFormReducer(previousState, previousStep());
    expect(nextState.step).toBe(0);
  });

  it('should not decrement step when step === 0', () => {
    const previousState = { ...initialState, step: 0 };
    const nextState = profilerFormReducer(previousState, previousStep());
    expect(nextState.step).toBe(0);
  });

  it('should handle nextSubStep', () => {
    const previousState = { ...initialState };
    const nextState = profilerFormReducer(previousState, nextSubStep());
    expect(nextState.subStep).toBe(2);
  });

  it('should not decrement subStep when subStep === 0', () => {
    const previousState = { ...initialState, subStep: 0 };
    const nextState = profilerFormReducer(previousState, previousSubStep());
    expect(nextState.subStep).toBe(0);
  });

  it('should handle previousSubStep', () => {
    const previousState = { ...initialState, subStep: 2 };
    const nextState = profilerFormReducer(previousState, previousSubStep());
    expect(nextState.subStep).toBe(1);
  });

  it('should handle updateBasicData', () => {
    const previousState = { ...initialState };
    const newBasicData = {
      name: 'John Doe',
      income: '50000',
      tyc: true
    };
    const nextState = profilerFormReducer(previousState, updateBasicData(newBasicData));

    expect(nextState.basicData.name).toBe('John Doe');
    expect(nextState.basicData.income).toBe('50000');
    expect(nextState.basicData.tyc).toBe(true);

    expect(nextState.basicData.tycAcceptedAt).toBeDefined();
    if (nextState.basicData.tycAcceptedAt) {
      expect(new Date(nextState.basicData.tycAcceptedAt).toString()).not.toBe('Invalid Date');
    }
  });

  it('should handle updateFormData', () => {
    const previousState = { ...initialState };
    const newFormData = {
      pension: {
        answer_1: { value: 1, content: 'Yes' },
        answer_2: { value: 1, content: 'Yes' },
        answer_3: { value: 1, content: 'Yes' }
      }
    };
    const nextState = profilerFormReducer(
      previousState,
      updateFormData({ index: 0, question: newFormData.pension.answer_1 })
    );
    expect(nextState.formData[0].value).toBe(1);
    expect(nextState.formData[0].content).toBe('Yes');
  });

  it('should handle resetForm', () => {
    const previousState = { ...initialState, step: 2 };
    const nextState = profilerFormReducer(previousState, resetForm());
    expect(nextState.step).toBe(1);
    expect(nextState.formData).toEqual(initialState.formData);
  });

  it('should handle checkBasicInfo', () => {
    const previousState = { ...initialState, hasBasicInfo: false };
    const nextState = profilerFormReducer(previousState, checkBasicInfo());
    expect(nextState.hasBasicInfo).toBe(true);
  });

  it('should handle checkBasicInfo', () => {
    const previousState = { ...initialState, hasCompletedOnboarding: false };
    const nextState = profilerFormReducer(previousState, checkOnboardingStatus());
    expect(nextState.hasCompletedOnboarding).toBe(true);
  });
});
