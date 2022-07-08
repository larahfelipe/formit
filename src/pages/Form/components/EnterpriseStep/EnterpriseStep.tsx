import * as M from '@mantine/core';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { MIN_DATE_RANGE, MAX_DATE_RANGE } from '@/common';
import { Input } from '@/components';
import { MERCHANT_CATEGORY_CODES } from '@/data';
import { EnterpriseStep as EnterpriseStepData, useUserStore } from '@/store';

import { StepComponentProps, Steps, FormNames } from '../../types';
import { useStyles } from './styles';

export const EnterpriseStep = ({ onChangeStep }: StepComponentProps) => {
  const { classes } = useStyles();

  const setEnterpriseStep = useUserStore((state) => state.setEnterpriseStep);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useFormContext<EnterpriseStepData>();

  const handleEnterpriseSubmit: SubmitHandler<EnterpriseStepData> = (
    formData
  ) => {
    setEnterpriseStep(formData);
    onChangeStep(Steps.SECOND);
  };

  return (
    <form
      id={FormNames.ENTERPRISE_STEP}
      onSubmit={handleSubmit(handleEnterpriseSubmit)}
      className={classes.Wrapper}
    >
      <div className={classes.InputWrapper}>
        <M.Text mb="8px">CNPJ</M.Text>
        <Input
          control={control}
          name="federalDocument"
          mask="cnpj"
          error={errors.federalDocument && errors.federalDocument.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Razão social da empresa</M.Text>
        <Input
          control={control}
          name="corporateName"
          error={errors.corporateName && errors.corporateName.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Categoria do negócio</M.Text>
        <Input
          verboseSelectionValue
          type="select"
          data={MERCHANT_CATEGORY_CODES}
          control={control}
          name="businessCategory"
          error={errors.businessCategory && errors.businessCategory.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Data de criação</M.Text>
        <Input
          control={control}
          type="date"
          min={MIN_DATE_RANGE}
          max={MAX_DATE_RANGE}
          name="creationDate"
          error={errors.creationDate && errors.creationDate.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">E-mail</M.Text>
        <Input
          control={control}
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
