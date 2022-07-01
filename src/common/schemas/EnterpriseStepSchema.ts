import { clear } from '@nafuzi/brazilian-masks';
import { validateCNPJ, validateCPF } from 'validations-br';
import * as yup from 'yup';

import { VALIDATIONS } from '@/common';

export const EnterpriseStepSchema = yup.object().shape({
  federalDocument: yup
    .string()
    .typeError('CNPJ inválido')
    .min(14, 'CNPJ deve ter 14 dígitos')
    .max(18, 'CNPJ deve ter 14 dígitos')
    .test(
      'is-cpf-or-cnpj',
      (params) => {
        if (clear(params?.value || '').length <= 11) return 'CPF inválido';

        return 'CNPJ inválido';
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
