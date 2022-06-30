import { clear } from '@nafuzi/brazilian-masks';
import { validateCNPJ, validateCPF } from 'validations-br';
import * as yup from 'yup';

import { VALIDATIONS } from '@/common';

export const RegistrationStepSchema = yup.object().shape({
  federalDocument: yup
    .string()
    .typeError('CPF/CNPJ inválido')
    .min(14, 'CPF deve ter 11 dígitos')
    .max(18, 'CNPJ deve ter 14 dígitos')
    .test(
      'is-cpf-or-cnpj',
      (params) => {
        if (clear(params?.value || '').length <= 11) return 'CPF inválido';

        return 'CNPJ inválido';
      },
      (value) => validateCNPJ(value || '') || validateCPF(value || '')
    )
    .required('CPF/CNPJ é obrigatório')
    .trim(),
  corporateName: yup.string().typeError('Razão social inválida').notRequired(),
  name: yup
    .string()
    .typeError('Nome inválido')
    .matches(VALIDATIONS.name, 'Nome inválido')
    .required('Nome é obrigatório')
    .trim(),
  birthDate: yup
    .string()
    .typeError('Data de nascimento inválida')
    .required('Data de nascimento é obrigatória')
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
