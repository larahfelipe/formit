import { Steps } from '@/pages/Form/types';

import type { UserStoreState } from './types';

export const initialState: UserStoreState = {
  activeStep: Steps.FIRST,
  formIsValidated: false,
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
    filesStorageRef: []
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
