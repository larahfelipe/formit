import { Steps } from '@/pages/Main/types';

import type { UserStoreState } from './types';

export const initialState: UserStoreState = {
  activeStep: Steps.FIRST,
  enterpriseStep: {
    federalDocument: '',
    corporateName: '',
    businessCategory: '',
    creationDate: '',
    email: '',
    phone: ''
  },
  addressStep: {
    zipCode: '',
    publicPlace: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: ''
  },
  proprietaryStep: {
    federalDocument: '',
    name: '',
    birthDate: '',
    email: '',
    phone: '',
    files: [] as File[]
  },
  paymentMethodsStep: {
    bankName: '',
    accountType: '',
    agency: '',
    agencyDigit: '',
    account: '',
    accountDigit: '',
    accountHolderFederalDocument: ''
  }
};
