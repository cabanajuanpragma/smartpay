export { default } from './store';

export type { RootState, AppDispatch } from './store';

export { useAppDispatch, useAppSelector } from './hooks';
export {
  nextStep,
  previousStep,
  nextSubStep,
  previousSubStep,
  checkBasicInfo,
  checkOnboardingStatus,
  checkCompletedFormStatus,
  setCompletedIdentificationStatus,
  updateBasicData,
  updateFormData,
  setTotalQuestions,
  resetForm,
  setIsProtectionClient
} from './slices/profileFormSlice/profilerFormSlice';
