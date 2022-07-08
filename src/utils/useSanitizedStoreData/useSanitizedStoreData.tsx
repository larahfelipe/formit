import { clear } from '@nafuzi/brazilian-masks';

import { useUserStore } from '@/store';

import type { UserData } from './types';

export const useSanitizedStoreData = () => {
  const enterpriseStep = useUserStore((state) => state.enterpriseStep);
  const addressStep = useUserStore((state) => state.addressStep);
  const proprietaryStep = useUserStore((state) => state.proprietaryStep);
  const paymentMethodsStep = useUserStore((state) => state.paymentMethodsStep);

  const getAll = () => {
    const formattedUserData: UserData = {
      enterprise: {
        ...enterpriseStep,
        federalDocument: clear(enterpriseStep.federalDocument),
        phone: clear(enterpriseStep.phone)
      },
      address: {
        ...addressStep,
        zipCode: clear(addressStep.zipCode)
      },
      proprietary: {
        ...proprietaryStep,
        federalDocument: clear(proprietaryStep.federalDocument),
        phone: clear(proprietaryStep.phone)
      },
      paymentMethods: {
        ...paymentMethodsStep,
        accountHolderFederalDocument: clear(
          paymentMethodsStep.accountHolderFederalDocument
        )
      }
    };

    return formattedUserData;
  };

  const getValue = <T extends keyof UserData, K extends keyof UserData[T]>(
    from: T,
    key: K
  ) => {
    const value = getAll()[from][key];
    return value;
  };

  return { getAll, getValue };
};
