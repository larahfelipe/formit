import { clear } from '@nafuzi/brazilian-masks';
import { validateCNPJ, validateCPF } from 'validations-br';
import * as yup from 'yup';

export const PaymentMethodsStepSchema = yup.object().shape({
  bankName: yup
    .string()
    .typeError('Nome do banco inválido')
    .required('Nome do banco é obrigatório')
    .trim(),
  agency: yup
    .number()
    .typeError('Agência inválida')
    .required('Agência é obrigatória'),
  agencyDigit: yup
    .number()
    .typeError('Dígito da agência inválido')
    .notRequired(),
  account: yup
    .number()
    .typeError('Conta inválida')
    .required('Conta é obrigatória'),
  accountDigit: yup
    .number()
    .typeError('Dígito da conta inválido')
    .required('Dígito da conta é obrigatória'),
  accountHolderFederalDocument: yup
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
});
