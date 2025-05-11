import { clear } from '@nafuzi/brazilian-masks';

import { useUserStore } from '@/store';

import type { UserData } from './types';

export const useSanitizedStoreData = () => {
  const company = useUserStore((state) => state.company);
  const address = useUserStore((state) => state.address);
  const owner = useUserStore((state) => state.owner);
  const billing = useUserStore((state) => state.billing);

  const getAll = () => {
    const formattedUserData: UserData = {
      company: {
        ...company,
        cnpj: clear(company.cnpj),
        phone: clear(company.phone)
      },
      address: {
        ...address,
        zipCode: clear(address.zipCode)
      },
      owner: {
        ...owner,
        cpf: clear(owner.cpf),
        phone: clear(owner.phone)
      },
      billing: {
        ...billing,
        holderCpfCnpj: clear(billing.holderCpfCnpj)
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
