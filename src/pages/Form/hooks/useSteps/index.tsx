import { useMemo } from 'react';

import { FormProvider } from 'react-hook-form';

import {
  AddressStep,
  EnterpriseStep,
  PaymentMethodsStep,
  ProprietaryStep
} from '../../components';
import { FormNames, Step } from '../../types';
import { useStepForms } from '../useStepForms';

export const useSteps = () => {
  const {
    enterpriseStepMethods,
    addressStepMethods,
    proprietaryStepMethods,
    paymentMethodsStepMethods
  } = useStepForms();

  const steps = useMemo<Step[]>(
    () => [
      {
        title: 'Empreendimento',
        formName: FormNames.ENTERPRISE_STEP,
        formDataIsValid: enterpriseStepMethods.formState.isValid,
        Element: ({ onChangeStep }) => (
          <FormProvider {...enterpriseStepMethods}>
            <EnterpriseStep onChangeStep={onChangeStep} />
          </FormProvider>
        )
      },
      {
        title: 'Endereço',
        formName: FormNames.ADDRESS_STEP,
        formDataIsValid: addressStepMethods.formState.isValid,
        Element: ({ onChangeStep }) => (
          <FormProvider {...addressStepMethods}>
            <AddressStep onChangeStep={onChangeStep} />
          </FormProvider>
        )
      },
      {
        title: 'Proprietário',
        formName: FormNames.PROPRIETARY_STEP,
        formDataIsValid: proprietaryStepMethods.formState.isValid,
        Element: ({ onChangeStep }) => (
          <FormProvider {...proprietaryStepMethods}>
            <ProprietaryStep onChangeStep={onChangeStep} />
          </FormProvider>
        )
      },
      {
        title: 'Métodos de pagamento',
        formName: FormNames.PAYMENT_METHODS_STEP,
        formDataIsValid: paymentMethodsStepMethods.formState.isValid,
        Element: () => (
          <FormProvider {...paymentMethodsStepMethods}>
            <PaymentMethodsStep />
          </FormProvider>
        )
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      enterpriseStepMethods.formState.isValid,
      addressStepMethods.formState.isValid,
      proprietaryStepMethods.formState.isValid,
      paymentMethodsStepMethods.formState.isValid
    ]
  );

  return { steps };
};
