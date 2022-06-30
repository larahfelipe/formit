import type { SetState as ZustandSetState } from 'zustand';

import { Steps } from '@/pages/Main/types';

export type RegistrationStep = {
  federalDocument: string;
  corporateName?: string;
  name: string;
  birthDate: string;
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

export type PaymentMethods = {
  bankName: string;
  agency: string;
  agencyDigit?: string;
  account: string;
  accountDigit: string;
  accountHolderFederalDocument: string;
};

export type UserStoreState = {
  activeStep: Steps;
  registrationStep: RegistrationStep;
  addressStep: AddressStep;
  paymentMethodsStep: PaymentMethods;
};

export type UserStoreActions = {
  setActiveStep: (payload: Steps) => void;
  setRegistrationStep: (payload: RegistrationStep) => void;
  setAddressStep: (payload: AddressStep) => void;
  setPaymentMethodsStep: (payload: PaymentMethods) => void;
};

export type UserStore = UserStoreState & UserStoreActions;

export type SetState = ZustandSetState<UserStore>;
