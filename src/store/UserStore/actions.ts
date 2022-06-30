import { initialState } from './state';
import type { SetState, UserStoreActions } from './types';

export const resetStore = (set: SetState) => () => set({ ...initialState });

export const setActiveStep =
  (set: SetState): UserStoreActions['setActiveStep'] =>
  (payload) =>
    set({ activeStep: payload });

export const setRegistration =
  (set: SetState): UserStoreActions['setRegistrationStep'] =>
  (payload) =>
    set({ registrationStep: payload });

export const setAddress =
  (set: SetState): UserStoreActions['setAddressStep'] =>
  (payload) =>
    set({ addressStep: payload });

export const setPaymentMethods =
  (set: SetState): UserStoreActions['setPaymentMethodsStep'] =>
  (payload) =>
    set({ paymentMethodsStep: payload });
