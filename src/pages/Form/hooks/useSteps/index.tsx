import { FormProvider } from 'react-hook-form';

import {
  AddressStep,
  BillingStep,
  CompanyStep,
  OwnerStep
} from '@/pages/Form/components';

import { FormNames, Step } from '../../types';
import { useStepForms } from '../useStepForms';

export const useSteps = () => {
  const {
    companyFormMethods,
    addressFormMethods,
    ownerFormMethods,
    billingFormMethods
  } = useStepForms();

  const steps: Step[] = [
    {
      title: 'Empresa',
      formName: FormNames.COMPANY_STEP,
      formIsValid: companyFormMethods.formState.isValid,
      Element: ({ onChangeStep }) => (
        <FormProvider {...companyFormMethods}>
          <CompanyStep onChangeStep={onChangeStep} />
        </FormProvider>
      )
    },
    {
      title: 'Endereço',
      formName: FormNames.ADDRESS_STEP,
      formIsValid: addressFormMethods.formState.isValid,
      Element: ({ onChangeStep }) => (
        <FormProvider {...addressFormMethods}>
          <AddressStep onChangeStep={onChangeStep} />
        </FormProvider>
      )
    },
    {
      title: 'Proprietário',
      formName: FormNames.OWNER_STEP,
      formIsValid: ownerFormMethods.formState.isValid,
      Element: ({ onChangeStep }) => (
        <FormProvider {...ownerFormMethods}>
          <OwnerStep onChangeStep={onChangeStep} />
        </FormProvider>
      )
    },
    {
      title: 'Cobrança',
      formName: FormNames.BILLING_STEP,
      formIsValid: billingFormMethods.formState.isValid,
      Element: () => (
        <FormProvider {...billingFormMethods}>
          <BillingStep />
        </FormProvider>
      )
    }
  ];

  return { steps };
};
