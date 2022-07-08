import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import {
  AddressStepSchema,
  EnterpriseStepSchema,
  PaymentMethodsStepSchema,
  ProprietaryStepSchema
} from '@/common';
import { useUserStore } from '@/store';

export const useStepForms = () => {
  const enterpriseStep = useUserStore((state) => state.enterpriseStep);
  const addressStep = useUserStore((state) => state.addressStep);
  const proprietaryStep = useUserStore((state) => state.proprietaryStep);
  const paymentMethodsStep = useUserStore((state) => state.paymentMethodsStep);

  const enterpriseStepMethods = useForm({
    resolver: yupResolver(EnterpriseStepSchema),
    defaultValues: { ...enterpriseStep },
    mode: 'onBlur'
  });
  const addressStepMethods = useForm({
    resolver: yupResolver(AddressStepSchema),
    defaultValues: { ...addressStep },
    mode: 'onBlur'
  });
  const proprietaryStepMethods = useForm({
    resolver: yupResolver(ProprietaryStepSchema),
    defaultValues: { ...proprietaryStep },
    mode: 'onBlur'
  });
  const paymentMethodsStepMethods = useForm({
    resolver: yupResolver(PaymentMethodsStepSchema),
    defaultValues: { ...paymentMethodsStep },
    mode: 'onBlur'
  });

  return {
    enterpriseStepMethods,
    addressStepMethods,
    proprietaryStepMethods,
    paymentMethodsStepMethods
  };
};
