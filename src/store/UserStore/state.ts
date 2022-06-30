import { Steps } from '@/pages/Main/types';

import type { UserStoreState } from './types';

export const initialState: UserStoreState = {
  activeStep: Steps.FIRST,
  registrationStep: {
    federalDocument: '',
    corporateName: '',
    name: '',
    birthDate: '',
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
