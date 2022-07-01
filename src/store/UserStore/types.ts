import type { SetState as ZustandSetState } from 'zustand';

import { Steps } from '@/pages/Main/types';

export type EnterpriseStep = {
  federalDocument: string;
  corporateName: string;
  businessCategory: string;
  creationDate: string;
  email: string;
  phone: string;
};

export type AddressStep = {
  zipCode: string;
  publicPlace: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  state: string;
};

export type ProprietaryStep = {
  name: string;
  federalDocument: string;
  birthDate: string;
  email: string;
  phone: string;
  files: File[];
};

export type PaymentMethods = {
  bankName: string;
  accountType: string;
  agency: string;
  agencyDigit?: string;
  account: string;
  accountDigit: string;
  accountHolderFederalDocument: string;
};

export type UserStoreState = {
  activeStep: Steps;
  enterpriseStep: EnterpriseStep;
  addressStep: AddressStep;
  proprietaryStep: ProprietaryStep;
  paymentMethodsStep: PaymentMethods;
};

export type UserStoreActions = {
  setActiveStep: (payload: Steps) => void;
  setEnterpriseStep: (payload: EnterpriseStep) => void;
  setAddressStep: (payload: AddressStep) => void;
  setProprietaryStep: (payload: ProprietaryStep) => void;
  setPaymentMethodsStep: (payload: PaymentMethods) => void;
};

export type UserStore = UserStoreState & UserStoreActions;

export type SetState = ZustandSetState<UserStore>;
