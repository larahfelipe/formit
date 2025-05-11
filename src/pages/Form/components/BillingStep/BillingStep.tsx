import * as M from '@mantine/core';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Input } from '@/components/Input';
import { ACCOUNT_TYPES, BRAZILIAN_BANKS } from '@/data';
import { Billing as BillingFormSchema, useUserStore } from '@/store';

import { FormNames } from '../../types';
import { useStyles } from './styles';

export const BillingStep = () => {
  const { classes } = useStyles();

  const { control, handleSubmit } = useFormContext<BillingFormSchema>();

  const navigate = useNavigate();

  const setBilling = useUserStore((state) => state.setBilling);
  const setFormIsValidated = useUserStore((state) => state.setFormIsValidated);

  const onSubmitBillingForm: SubmitHandler<BillingFormSchema> = (formData) => {
    setBilling(formData);
    setFormIsValidated(true);
    navigate('/confirm');
  };

  return (
    <form
      id={FormNames.BILLING_STEP}
      onSubmit={handleSubmit(onSubmitBillingForm)}
      className={classes.Wrapper}
    >
      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Banco</M.Text>
        <Input
          type="select"
          control={control}
          name="bankName"
          data={BRAZILIAN_BANKS}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Tipo de conta</M.Text>
        <Input
          type="select"
          control={control}
          name="accountType"
          data={ACCOUNT_TYPES}
        />
      </div>

      <div className={classes.InlineFieldsWrapper}>
        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Agência</M.Text>
          <Input control={control} name="agency" />
        </div>

        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Dígito da agência</M.Text>
          <Input control={control} name="agencyDigit" placeholder="Opcional" />
        </div>
      </div>

      <div className={classes.InlineFieldsWrapper}>
        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Conta</M.Text>
          <Input control={control} name="account" />
        </div>

        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Dígito da conta</M.Text>
          <Input control={control} name="accountDigit" />
        </div>
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">CPF/CNPJ do titular da conta</M.Text>
        <Input control={control} name="holderCpfCnpj" mask="cpfOrCnpj" />
      </div>
    </form>
  );
};
