import * as yup from 'yup';
import type { SetState as ZustandSetState } from 'zustand';

import {
  addressSchema,
  billingSchema,
  companySchema,
  ownerSchema
} from '@/common/schemas';
import { StepsNum } from '@/pages/Form/types';

export type Company = yup.InferType<typeof companySchema>;

export type Address = yup.InferType<typeof addressSchema>;

export type Owner = yup.InferType<typeof ownerSchema>;

export type Billing = yup.InferType<typeof billingSchema>;

export type UserStoreState = {
  activeStep: StepsNum;
  formIsValidated: boolean;
  company: Company;
  address: Address;
  owner: Owner;
  billing: Billing;
};

export type UserStoreActions = {
  resetStore: () => void;
  setActiveStep: (payload: StepsNum) => void;
  setFormIsValidated: (payload: boolean) => void;
  setCompany: (payload: Company) => void;
  setAddress: (payload: Address) => void;
  setOwner: (payload: Owner) => void;
  setBilling: (payload: Billing) => void;
};

export type UserStore = UserStoreState & UserStoreActions;

export type SetState = ZustandSetState<UserStore>;
