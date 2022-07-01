import create from 'zustand';
import { persist } from 'zustand/middleware';

import config from '@/config';

import {
  setActiveStep,
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
    setActiveStep: setActiveStep(set),
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
