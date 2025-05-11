import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import {
  addressSchema,
  billingSchema,
  companySchema,
  ownerSchema
} from '@/common/schemas';
import { useUserStore } from '@/store';

export const useStepForms = () => {
  const companyStep = useUserStore((state) => state.company);
  const addressStep = useUserStore((state) => state.address);
  const proprietaryStep = useUserStore((state) => state.owner);
  const paymentMethodsStep = useUserStore((state) => state.billing);

  const companyFormMethods = useForm({
    resolver: yupResolver(companySchema),
    defaultValues: { ...companyStep },
    mode: 'onChange'
  });
  const addressFormMethods = useForm({
    resolver: yupResolver(addressSchema),
    defaultValues: { ...addressStep },
    mode: 'onChange'
  });
  const ownerFormMethods = useForm({
    resolver: yupResolver(ownerSchema),
    defaultValues: { ...proprietaryStep },
    mode: 'onChange'
  });
  const billingFormMethods = useForm({
    resolver: yupResolver(billingSchema),
    defaultValues: { ...paymentMethodsStep },
    mode: 'onChange'
  });

  return {
    companyFormMethods,
    addressFormMethods,
    ownerFormMethods,
    billingFormMethods
  };
};
