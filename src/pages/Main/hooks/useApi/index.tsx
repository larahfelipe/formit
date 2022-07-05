import { clear } from '@nafuzi/brazilian-masks';
import { toast } from 'react-hot-toast';

// import { api } from '@/services';
import { useUserStore } from '@/store';

import type { UserData } from './types';

export const useApi = () => {
  const resetStore = useUserStore((state) => state.resetStore);
  const enterpriseStep = useUserStore((state) => state.enterpriseStep);
  const addressStep = useUserStore((state) => state.addressStep);
  const proprietaryStep = useUserStore((state) => state.proprietaryStep);
  const paymentMethodsStep = useUserStore((state) => state.paymentMethodsStep);

  const handleSendUserData = async () => {
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

    try {
      console.log(formattedUserData);
      // await api.post('/users', formattedUserData);
      toast.success('Dados enviados com sucesso!');
      resetStore();
    } catch (err) {
      console.error(err);
      toast.error('Algo deu errado! Tente novamente mais tarde.');
    }
  };

  return { handleSendUserData };
};
