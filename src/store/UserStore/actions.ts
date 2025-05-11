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

export const setCompany =
  (set: SetState): UserStoreActions['setCompany'] =>
    (payload) =>
      set({ company: payload });

export const setAddress =
  (set: SetState): UserStoreActions['setAddress'] =>
    (payload) =>
      set({ address: payload });

export const setOwner =
  (set: SetState): UserStoreActions['setOwner'] =>
    (payload) =>
      set({ owner: payload });

export const setBilling =
  (set: SetState): UserStoreActions['setBilling'] =>
    (payload) =>
      set({ billing: payload });
