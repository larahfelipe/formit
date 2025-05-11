import create from 'zustand';
import { persist } from 'zustand/middleware';

import config from '@/common/config';

import {
  resetStore,
  setActiveStep,
  setAddress,
  setBilling,
  setCompany,
  setFormIsValidated,
  setOwner
} from './actions';
import { initialState } from './state';
import type { UserStore } from './types';

const userStoreWithPersist = persist<UserStore>(
  (set) => ({
    ...initialState,
    resetStore: resetStore(set),
    setActiveStep: setActiveStep(set),
    setFormIsValidated: setFormIsValidated(set),
    setCompany: setCompany(set),
    setAddress: setAddress(set),
    setOwner: setOwner(set),
    setBilling: setBilling(set)
  }),
  {
    name: config.userStorageKey
  }
);

export const useUserStore = create(userStoreWithPersist);
