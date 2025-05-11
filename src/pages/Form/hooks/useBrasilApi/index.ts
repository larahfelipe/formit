import { useCallback, useState } from 'react';

import { clear } from '@nafuzi/brazilian-masks';
import axios, { AxiosResponse } from 'axios';

import config from '@/common/config';

import {
  GetAddressByZipCodeResponseData,
  GetCompanyByCnpjResponseData
} from './types';

export const useBrasilApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [addressData, setAddressData] =
    useState<GetAddressByZipCodeResponseData>();
  const [companyData, setCompanyData] =
    useState<GetCompanyByCnpjResponseData>();

  const getAddressByZipCode = useCallback(async (zipCode: string) => {
    const sanitizedZipCode = clear(zipCode);
    try {
      setIsLoading(true);
      const { data }: AxiosResponse<GetAddressByZipCodeResponseData> =
        await axios.get(`${config.brasilApiUrl}/cep/v1/${sanitizedZipCode}`);
      setAddressData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getCompanyByCnpj = useCallback(async (cnpj: string) => {
    const sanitizedCnpj = clear(cnpj);
    try {
      setIsLoading(true);
      const { data } = await axios.get<GetCompanyByCnpjResponseData>(
        `${config.brasilApiUrl}/cnpj/v1/${sanitizedCnpj}`
      );
      setCompanyData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    addressData,
    companyData,
    getAddressByZipCode,
    getCompanyByCnpj
  };
};
