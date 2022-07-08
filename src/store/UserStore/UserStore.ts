import create from 'zustand';
import { persist } from 'zustand/middleware';

import config from '@/config';

import {
  resetStore,
  setActiveStep,
  setFormIsValidated,
  setAddress,
  setEnterprise,
  setPaymentMethods,
  setProprietary
} from './actions';
import { initialState } from './state';
import type { UserStore } from './types';

const userStoreWithPersist = persist<UserStore>(
  (set) => ({
    ...initialState,
    resetStore: resetStore(set),
    setActiveStep: setActiveStep(set),
    setFormIsValidated: setFormIsValidated(set),
    setEnterpriseStep: setEnterprise(set),
    setAddressStep: setAddress(set),
    setProprietaryStep: setProprietary(set),
    setPaymentMethodsStep: setPaymentMethods(set)
  }),
  {
    name: config.userStorageKey
  }
);

export const useUserStore = create(userStoreWithPersist);
