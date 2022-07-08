import { clear } from '@nafuzi/brazilian-masks';
import { validateCNPJ, validateCPF } from 'validations-br';
import * as yup from 'yup';

import { VALIDATIONS } from '@/common';
import { MERCHANT_CATEGORY_CODES } from '@/data';

export const EnterpriseStepSchema = yup.object().shape({
  federalDocument: yup
    .string()
    .typeError('CNPJ inválido')
    .min(18, 'CNPJ deve ter 14 dígitos')
    .max(18, 'CNPJ deve ter 14 dígitos')
    .test(
      'is-cpf-or-cnpj',
      (params) => {
        if (clear(params?.value || '').length <= 11) return 'CNPJ inválido';
      },
      (value) => validateCNPJ(value || '') || validateCPF(value || '')
    )
    .required('CNPJ é obrigatório')
    .trim(),
  corporateName: yup
    .string()
    .typeError('Razão social inválida')
    .required('Razão social é obrigatória')
    .trim(),
  businessCategory: yup
    .string()
    .typeError('Categoria do negócio inválida')
    .test(
      'list-includes-selected-option',
      (params) => {
        const isValid = MERCHANT_CATEGORY_CODES.map(
          (item) => item.value
        ).includes(params as any);
        if (isValid) return 'Categoria do negócio inválida';
      },
      (value) =>
        MERCHANT_CATEGORY_CODES.map(
          (item) => `${item.value} - ${item.label}`
        ).includes(value as any)
    )
    .required('Categoria do negócio é obrigatória')
    .trim(),
  creationDate: yup
    .string()
    .typeError('Data de criação inválida')
    .required('Data de criação é obrigatória')
    .trim(),
  email: yup
    .string()
    .typeError('E-mail inválido')
    .email('E-mail inválido')
    .required('E-mail é obrigatório')
    .trim(),
  phone: yup
    .string()
    .typeError('Telefone inválido')
    .matches(VALIDATIONS.phone, 'Telefone inválido')
    .required('Telefone é obrigatório')
    .trim()
});
