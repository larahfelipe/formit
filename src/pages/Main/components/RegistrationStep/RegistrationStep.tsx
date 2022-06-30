import * as M from '@mantine/core';
import { clear } from '@nafuzi/brazilian-masks';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { CPF_MAX_LENGTH, MAX_DATE_RANGE } from '@/common';
import { Input } from '@/components';
import {
  RegistrationStep as RegistrationStepData,
  useUserStore
} from '@/store';

import { StepComponentProps, Steps, FormNames } from '../../types';
import { useStyles } from './styles';

export const RegistrationStep = ({ onChangeStep }: StepComponentProps) => {
  const { classes } = useStyles();

  const setRegistrationStep = useUserStore(
    (state) => state.setRegistrationStep
  );

  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useFormContext<RegistrationStepData>();

  const currentFederalDocumentValue = clear(getValues('federalDocument'));

  const handleRegistrationSubmit: SubmitHandler<RegistrationStepData> = (
    formData
  ) => {
    setRegistrationStep(formData);
    onChangeStep(Steps.SECOND);
  };

  return (
    <form
      id={FormNames.REGISTRATION_STEP}
      onSubmit={handleSubmit(handleRegistrationSubmit)}
      className={classes.Wrapper}
    >
      <div className={classes.InputWrapper}>
        <M.Text mb="8px">CPF/CNPJ</M.Text>
        <Input
          control={control}
          name="federalDocument"
          mask="cpfOrCnpj"
          error={errors.federalDocument && errors.federalDocument.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Razão social</M.Text>
        <Input
          control={control}
          name="corporateName"
          disabled={currentFederalDocumentValue.length <= CPF_MAX_LENGTH}
          error={errors.corporateName && errors.corporateName.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Nome completo</M.Text>
        <Input
          control={control}
          name="name"
          error={errors.name && errors.name.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Data de nascimento</M.Text>
        <Input
          control={control}
          type="date"
          min="1900-01-01"
          max={MAX_DATE_RANGE}
          name="birthDate"
          error={errors.birthDate && errors.birthDate.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">E-mail</M.Text>
        <Input
          control={control}
          type="email"
          name="email"
          error={errors.email && errors.email.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Telefone</M.Text>
        <Input
          control={control}
          name="phone"
          mask="phone"
          error={errors.phone && errors.phone.message}
        />
      </div>
    </form>
  );
};
