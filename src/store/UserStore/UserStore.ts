import create from 'zustand';
import { persist } from 'zustand/middleware';

import config from '@/config';

import {
  setActiveStep,
  setRegistration,
  setAddress,
  setPaymentMethods
} from './actions';
import { initialState } from './state';
import type { UserStore } from './types';

const userStoreWithPersist = persist<UserStore>(
  (set) => ({
    ...initialState,
    setActiveStep: setActiveStep(set),
    setRegistrationStep: setRegistration(set),
    setAddressStep: setAddress(set),
    setPaymentMethodsStep: setPaymentMethods(set)
  }),
  {
    name: config.userStorageKey
  }
);

export const useUserStore = create(userStoreWithPersist);
