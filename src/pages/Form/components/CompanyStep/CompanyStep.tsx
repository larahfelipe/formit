import { useEffect } from 'react';

import * as M from '@mantine/core';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { validateCNPJ } from 'validations-br';

import { MAX_DATE_RANGE, MIN_DATE_RANGE } from '@/common/constants';
import { Input } from '@/components/Input';
import { MERCHANT_CATEGORY_CODES } from '@/data';
import { Company as CompanyFormSchema, useUserStore } from '@/store';

import { useBrasilApi } from '../../hooks/useBrasilApi';
import { FormNames, StepComponentProps, StepsNum } from '../../types';
import { useStyles } from './styles';

export const CompanyStep = ({ onChangeStep }: StepComponentProps) => {
  const { classes } = useStyles();
  const { isLoading, getCompanyByCnpj, companyData } = useBrasilApi();

  const { control, handleSubmit, watch, setValue } =
    useFormContext<CompanyFormSchema>();

  const setCompany = useUserStore((state) => state.setCompany);

  const onSubmitCompanyForm: SubmitHandler<CompanyFormSchema> = (formData) => {
    setCompany(formData);
    onChangeStep(StepsNum.SECOND);
  };

  useEffect(() => {
    const subscription = watch(({ cnpj }, { name }) => {
      if (name === 'cnpj') {
        if (cnpj && validateCNPJ(cnpj)) getCompanyByCnpj(cnpj);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, getCompanyByCnpj]);

  useEffect(() => {
    if (companyData) {
      setValue('name', companyData.razao_social);
      setValue('creationDate', companyData.data_inicio_atividade);
    }
  }, [companyData, setValue]);

  return (
    <form
      id={FormNames.COMPANY_STEP}
      onSubmit={handleSubmit(onSubmitCompanyForm)}
      className={classes.Wrapper}
    >
      <div className={classes.InputWrapper}>
        <M.Text mb="8px">CNPJ</M.Text>
        <Input control={control} name="cnpj" loading={isLoading} />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Razão social</M.Text>
        <Input
          control={control}
          name="name"
          disabled={!!companyData?.razao_social || isLoading}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Categoria</M.Text>
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
          disabled={!!companyData?.data_inicio_atividade || isLoading}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Email</M.Text>
        <Input control={control} name="email" />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Telefone</M.Text>
        <Input control={control} name="phone" mask="phone" />
      </div>
    </form>
  );
};
