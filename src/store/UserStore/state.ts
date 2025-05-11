import { StepsNum } from '@/pages/Form/types';

import type { UserStoreState } from './types';

export const initialState: UserStoreState = {
  activeStep: StepsNum.FIRST,
  formIsValidated: false,
  company: {
    cnpj: '',
    name: '',
    businessCategory: '',
    creationDate: '',
    email: '',
    phone: ''
  },
  address: {
    zipCode: '',
    streetName: '',
    streetNumber: '' as unknown as number,
    complement: '',
    neighborhood: '',
    city: '',
    state: ''
  },
  owner: {
    cpf: '',
    name: '',
    bornDate: '',
    email: '',
    phone: '',
    filesUrl: []
  },
  billing: {
    bankName: '',
    accountType: '',
    agency: '',
    agencyDigit: '',
    account: '',
    accountDigit: '',
    holderCpfCnpj: ''
  }
};
