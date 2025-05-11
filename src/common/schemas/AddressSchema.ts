import * as yup from 'yup';

import { VALIDATIONS } from '@/common/constants';
import { BRAZILIAN_STATES } from '@/data';

export const addressSchema = yup.object({
  zipCode: yup
    .string()
    .typeError('CEP inválido')
    .matches(VALIDATIONS.cep, 'CEP inválido')
    .required('CEP é obrigatório')
    .trim(),
  streetName: yup
    .string()
    .typeError('Endereço inválido')
    .required('Endereço é obrigatório')
    .trim(),
  streetNumber: yup
    .number()
    .typeError('Número inválido')
    .required('Número é obrigatório'),
  complement: yup
    .string()
    .typeError('Complemento inválido')
    .notRequired()
    .trim(),
  neighborhood: yup
    .string()
    .typeError('Bairro inválido')
    .required('Bairro é obrigatório')
    .trim(),
  city: yup
    .string()
    .typeError('Cidade inválida')
    .required('Cidade é obrigatório')
    .trim(),
  state: yup
    .string()
    .typeError('Estado inválido')
    .test(
      'list-includes-selected-option',
      (params) => {
        const isNotValid = !BRAZILIAN_STATES.map((item) => item.value).includes(
          params as any
        );
        if (isNotValid) return 'Sigla do estado inválida';
      },
      (value) =>
        BRAZILIAN_STATES.map((item) => item.value).includes(value as any)
    )
    .min(2, 'Sigla do estado inválida')
    .max(2, 'Sigla do estado inválida')
    .required('Estado é obrigatório')
    .trim()
});
