import * as M from '@mantine/core';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Input } from '@/components';
import { BRAZILIAN_BANKS, ACCOUNT_TYPES } from '@/data';
import { PaymentMethods as PaymentMethodsData, useUserStore } from '@/store';

import { FormNames } from '../../types';
import { useStyles } from './styles';

export const PaymentMethodsStep = () => {
  const { classes } = useStyles();

  const { control, handleSubmit } = useFormContext<PaymentMethodsData>();

  const navigate = useNavigate();

  const setPaymentMethodsStep = useUserStore(
    (state) => state.setPaymentMethodsStep
  );
  const setFormIsValidated = useUserStore((state) => state.setFormIsValidated);

  const handlePaymentMethodsSubmit: SubmitHandler<PaymentMethodsData> = (
    formData
  ) => {
    setPaymentMethodsStep(formData);
    setFormIsValidated(true);
    navigate('/confirmation');
  };

  return (
    <form
      id={FormNames.PAYMENT_METHODS_STEP}
      onSubmit={handleSubmit(handlePaymentMethodsSubmit)}
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
        <Input
          control={control}
          name="accountHolderFederalDocument"
          mask="cpfOrCnpj"
        />
      </div>
    </form>
  );
};
