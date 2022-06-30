import { FormProvider } from 'react-hook-form';

import {
  AddressStep,
  PaymentMethodsStep,
  RegistrationStep
} from '../../components';
import { Step, FormNames } from '../../types';
import { useStepForms } from '../useStepForms';

export const useSteps = () => {
  const {
    registrationStepMethods,
    addressStepMethods,
    paymentMethodsStepMethods
  } = useStepForms();

  const steps: Step[] = [
    {
      title: 'Cadastro',
      formName: FormNames.REGISTRATION_STEP,
      formDataIsValid: registrationStepMethods.formState.isValid,
      Element: ({ onChangeStep }) => (
        <FormProvider {...registrationStepMethods}>
          <RegistrationStep onChangeStep={onChangeStep} />
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
      title: 'Métodos de pagamento',
      formName: FormNames.PAYMENT_METHODS_STEP,
      formDataIsValid: paymentMethodsStepMethods.formState.isValid,
      Element: ({ onChangeStep }) => (
        <FormProvider {...paymentMethodsStepMethods}>
          <PaymentMethodsStep onChangeStep={onChangeStep} />
        </FormProvider>
      )
    }
  ];

  return { steps };
};
