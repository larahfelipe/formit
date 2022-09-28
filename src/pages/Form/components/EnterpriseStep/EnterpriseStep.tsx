import { useEffect } from 'react';

import * as M from '@mantine/core';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { validateCNPJ } from 'validations-br';

import { MAX_DATE_RANGE, MIN_DATE_RANGE } from '@/common';
import { Input } from '@/components';
import { MERCHANT_CATEGORY_CODES } from '@/data';
import { EnterpriseStep as EnterpriseStepData, useUserStore } from '@/store';

import { useBrasilApi } from '../../hooks';
import { FormNames, StepComponentProps, Steps } from '../../types';
import { useStyles } from './styles';

export const EnterpriseStep = ({ onChangeStep }: StepComponentProps) => {
  const { classes } = useStyles();
  const { isLoading, getEnterpriseByCnpj, enterpriseData } = useBrasilApi();

  const { control, handleSubmit, watch, setValue } =
    useFormContext<EnterpriseStepData>();

  const setEnterpriseStep = useUserStore((state) => state.setEnterpriseStep);

  const handleEnterpriseSubmit: SubmitHandler<EnterpriseStepData> = (
    formData
  ) => {
    setEnterpriseStep(formData);
    onChangeStep(Steps.SECOND);
  };

  const enterpriseFederalDocument = watch('federalDocument');

  useEffect(() => {
    const isValidCNPJ = validateCNPJ(enterpriseFederalDocument);

    if (isValidCNPJ) getEnterpriseByCnpj(enterpriseFederalDocument);
  }, [enterpriseFederalDocument, getEnterpriseByCnpj]);

  useEffect(() => {
    if (enterpriseData) {
      setValue('corporateName', enterpriseData.razao_social);
      setValue('creationDate', enterpriseData.data_inicio_atividade);
    }
  }, [enterpriseData, setValue]);

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
          loading={isLoading}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Razão social da empresa</M.Text>
        <Input
          control={control}
          name="corporateName"
          disabled={!!enterpriseData.razao_social || isLoading}
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
          disabled={!!enterpriseData.data_inicio_atividade || isLoading}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">E-mail</M.Text>
        <Input control={control} name="email" />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Telefone</M.Text>
        <Input control={control} name="phone" mask="phone" />
      </div>
    </form>
  );
};
