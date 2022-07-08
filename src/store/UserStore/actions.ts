import { initialState } from './state';
import type { SetState, UserStoreActions } from './types';

export const resetStore = (set: SetState) => () => set({ ...initialState });

export const setActiveStep =
  (set: SetState): UserStoreActions['setActiveStep'] =>
  (payload) =>
    set({ activeStep: payload });

export const setFormIsValidated =
  (set: SetState): UserStoreActions['setFormIsValidated'] =>
  (payload) =>
    set({ formIsValidated: payload });

export const setEnterprise =
  (set: SetState): UserStoreActions['setEnterpriseStep'] =>
  (payload) =>
    set({ enterpriseStep: payload });

export const setAddress =
  (set: SetState): UserStoreActions['setAddressStep'] =>
  (payload) =>
    set({ addressStep: payload });

export const setProprietary =
  (set: SetState): UserStoreActions['setProprietaryStep'] =>
  (payload) =>
    set({ proprietaryStep: payload });

export const setPaymentMethods =
  (set: SetState): UserStoreActions['setPaymentMethodsStep'] =>
  (payload) =>
    set({ paymentMethodsStep: payload });
