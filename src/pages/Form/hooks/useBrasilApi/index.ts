import { useState, useCallback } from 'react';

import { clear } from '@nafuzi/brazilian-masks';
import axios, { AxiosResponse } from 'axios';

import config from '@/config';

import type { AddressData, EnterpriseData } from './types';

export const useBrasilApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addressData, setAddressData] = useState({} as AddressData);
  const [enterpriseData, setEnterpriseData] = useState({} as EnterpriseData);

  const getAddressByZipCode = useCallback(async (zipCode: string) => {
    const sanitizedZipCode = clear(zipCode);

    try {
      setIsLoading(true);
      const { data }: AxiosResponse<AddressData> = await axios.get(
        `${config.brasilApiUrl}/cep/v1/${sanitizedZipCode}`
      );
      setAddressData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getEnterpriseByCnpj = useCallback(
    async (enterpriseFederalDocument: string) => {
      const sanitizedEnterpriseFederalDocument = clear(
        enterpriseFederalDocument
      );

      try {
        setIsLoading(true);
        const { data }: AxiosResponse<EnterpriseData> = await axios.get(
          `${config.brasilApiUrl}/cnpj/v1/${sanitizedEnterpriseFederalDocument}`
        );
        setEnterpriseData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    isLoading,
    addressData,
    enterpriseData,
    getAddressByZipCode,
    getEnterpriseByCnpj
  };
};
