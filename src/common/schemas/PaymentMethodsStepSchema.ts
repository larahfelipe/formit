import { clear } from '@nafuzi/brazilian-masks';
import { validateCNPJ, validateCPF } from 'validations-br';
import * as yup from 'yup';

import { BRAZILIAN_BANKS, ACCOUNT_TYPES } from '@/data';

export const PaymentMethodsStepSchema = yup.object().shape({
  bankName: yup
    .string()
    .typeError('Banco inválido')
    .test(
      'list-includes-selected-option',
      (params) => {
        const isNotValid = !BRAZILIAN_BANKS.map((item) => item.value).includes(
          params as any
        );
        if (isNotValid) return 'Banco inválido';
      },
      (value) =>
        BRAZILIAN_BANKS.map((item) => item.value).includes(value as any)
    )
    .required('Banco é obrigatório')
    .trim(),
  accountType: yup
    .string()
    .typeError('Tipo de conta inválido')
    .test(
      'list-includes-selected-option',
      (params) => {
        const isNotValid = !ACCOUNT_TYPES.map((item) => item.value).includes(
          params as any
        );
        if (isNotValid) return 'Tipo de conta inválido';
      },
      (value) => ACCOUNT_TYPES.map((item) => item.value).includes(value as any)
    )
    .required('Tipo de conta é obrigatório')
    .trim(),
  agency: yup
    .string()
    .typeError('Agência inválida')
    .required('Agência é obrigatória')
    .trim(),
  agencyDigit: yup
    .string()
    .typeError('Dígito da agência inválido')
    .max(1, 'Dígito da agência deve ter no máximo 1 caractere')
    .notRequired()
    .trim(),
  account: yup
    .string()
    .typeError('Conta inválida')
    .required('Conta é obrigatória')
    .trim(),
  accountDigit: yup
    .string()
    .typeError('Dígito da conta inválido')
    .min(1, 'Dígito da conta deve ter no mínimo 1 caractere')
    .max(1, 'Dígito da conta deve ter no máximo 1 caractere')
    .required('Dígito da conta é obrigatória')
    .trim(),
  accountHolderFederalDocument: yup
    .string()
    .typeError('CPF/CNPJ inválido')
    .min(14, 'CPF deve ter 11 dígitos')
    .max(18, 'CNPJ deve ter 14 dígitos')
    .test(
      'is-cpf-or-cnpj',
      (params) => {
        const isNotValid = clear(params?.value || '').length <= 11;
        if (isNotValid) return 'CPF inválido';

        return 'CNPJ inválido';
      },
      (value) => validateCNPJ(value || '') || validateCPF(value || '')
    )
    .required('CPF/CNPJ é obrigatório')
    .trim()
});
