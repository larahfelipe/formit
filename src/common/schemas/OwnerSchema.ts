import { clear } from '@nafuzi/brazilian-masks';
import { validateCPF } from 'validations-br';
import * as yup from 'yup';

import { VALIDATIONS } from '@/common/constants';

export const ownerSchema = yup.object({
  name: yup
    .string()
    .typeError('Nome inválido')
    .matches(VALIDATIONS.name, 'Nome inválido')
    .required('Nome é obrigatório')
    .trim(),
  cpf: yup
    .string()
    .typeError('CPF inválido')
    .min(14, 'CPF deve ter 11 dígitos')
    .max(14, 'CPF deve ter 11 dígitos')
    .test(
      'is-cpf',
      (params) => {
        const isNotValid = clear(params?.value ?? '').length <= 11;
        if (isNotValid) return 'CPF inválido';
      },
      (value) => validateCPF(value ?? '')
    )
    .required('CPF é obrigatório')
    .trim(),
  bornDate: yup
    .string()
    .typeError('Data de nascimento inválida')
    .required('Data de nascimento é obrigatória')
    .trim(),
  email: yup
    .string()
    .typeError('Dígito da agência inválido')
    .email('Email inválido')
    .trim(),
  phone: yup
    .string()
    .typeError('Telefone inválido')
    .matches(VALIDATIONS.phone, 'Telefone inválido')
    .required('Telefone é obrigatório')
    .trim(),
  filesUrl: yup.array().notRequired()
});
