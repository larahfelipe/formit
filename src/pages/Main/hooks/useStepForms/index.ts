import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import {
  AddressStepSchema,
  PaymentMethodsStepSchema,
  RegistrationStepSchema
} from '@/common';
import { useUserStore } from '@/store';

export const useStepForms = () => {
  const registrationStep = useUserStore((state) => state.registrationStep);
  const addressStep = useUserStore((state) => state.addressStep);
  const paymentMethodsStep = useUserStore((state) => state.paymentMethodsStep);

  const registrationStepMethods = useForm({
    resolver: yupResolver(RegistrationStepSchema),
    defaultValues: { ...registrationStep },
    mode: 'onBlur'
  });
  const addressStepMethods = useForm({
    resolver: yupResolver(AddressStepSchema),
    defaultValues: { ...addressStep },
    mode: 'onBlur'
  });
  const paymentMethodsStepMethods = useForm({
    resolver: yupResolver(PaymentMethodsStepSchema),
    defaultValues: { ...paymentMethodsStep },
    mode: 'onBlur'
  });

  return {
    registrationStepMethods,
    addressStepMethods,
    paymentMethodsStepMethods
  };
};
