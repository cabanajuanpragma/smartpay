import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProfilerBasicData, ProfilerFormState } from '@/types';
import { Question } from '@/types/profilerForm.interface';
import { PROFILER_INITIAL_STATE } from '@/utils/constants';

const initialState: ProfilerFormState = PROFILER_INITIAL_STATE;

const profilerFormSlice = createSlice({
  name: 'profilerForm',
  initialState,
  reducers: {
    nextStep(state) {
      state.step += 1;
    },
    previousStep(state) {
      if (state.step > 0) state.step -= 1;
    },
    nextSubStep(state) {
      state.subStep += 1;
    },
    previousSubStep(state) {
      if (state.subStep > 0) state.subStep -= 1;
    },
    checkBasicInfo(state) {
      state.hasBasicInfo = !state.hasBasicInfo;
    },
    checkOnboardingStatus(state) {
      state.hasCompletedOnboarding = !state.hasCompletedOnboarding;
    },
    checkCompletedFormStatus(state) {
      state.hasCompletedForm = !state.hasCompletedForm;
    },
    setCompletedIdentificationStatus(state, action: PayloadAction<boolean>) {
      state.hasCompletedIdentification = action.payload;
    },
    updateBasicData(state, action: PayloadAction<Partial<ProfilerBasicData>>) {
      state.basicData = {
        ...state.basicData,
        ...action.payload,
        tycAcceptedAt:
          action.payload.tyc && !state.basicData.tycAcceptedAt
            ? new Date().toISOString()
            : state.basicData.tycAcceptedAt
      };
    },
    updateFormData(state, action: PayloadAction<{ question: Question; index: number }>) {
      const { question, index } = action.payload;

      if (state.formData[index]) {
        state.formData[index] = question;
      } else {
        state.formData = [...state.formData, question];
      }
    },
    resetForm(state) {
      state.step = 1;
      state.formData = initialState.formData;
    },
    setTotalQuestions(state, action: PayloadAction<number>) {
      state.totalQuestions = action.payload;
    },
    setIsProtectionClient(state, action: PayloadAction<boolean>) {
      state.isProtectionClient = action.payload;
    }
  }
});

export const {
  nextStep,
  previousStep,
  nextSubStep,
  previousSubStep,
  updateBasicData,
  updateFormData,
  resetForm,
  checkBasicInfo,
  checkOnboardingStatus,
  checkCompletedFormStatus,
  setCompletedIdentificationStatus,
  setTotalQuestions,
  setIsProtectionClient
} = profilerFormSlice.actions;
export default profilerFormSlice.reducer;
