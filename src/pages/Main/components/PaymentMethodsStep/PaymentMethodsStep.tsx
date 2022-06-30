import * as M from '@mantine/core';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { SelectInput, Input } from '@/components';
import { BRAZILIAN_BANKS } from '@/data/BrazilianBanks';
import { PaymentMethods as PaymentMethodsData, useUserStore } from '@/store';

import { StepComponentProps, Steps, FormNames } from '../../types';
import { useStyles } from './styles';

export const PaymentMethodsStep = ({ onChangeStep }: StepComponentProps) => {
  const { classes } = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useFormContext<PaymentMethodsData>();

  const setPaymentMethodsStep = useUserStore(
    (state) => state.setPaymentMethodsStep
  );

  const handlePaymentMethodsSubmit: SubmitHandler<PaymentMethodsData> = (
    formData
  ) => {
    setPaymentMethodsStep(formData);
    onChangeStep(Steps.FIRST);
  };

  return (
    <form
      id={FormNames.PAYMENT_METHODS_STEP}
      onSubmit={handleSubmit(handlePaymentMethodsSubmit)}
      className={classes.Wrapper}
    >
      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Banco</M.Text>
        <SelectInput
          control={control}
          name="bankName"
          optionsData={BRAZILIAN_BANKS}
          error={errors.bankName && errors.bankName.message}
        />
      </div>

      <div className={classes.InlineFieldsWrapper}>
        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Agência</M.Text>
          <Input
            control={control}
            name="agency"
            error={errors.agency && errors.agency.message}
          />
        </div>

        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Dígito da agência</M.Text>
          <Input
            control={control}
            name="agencyDigit"
            placeholder="Opcional"
            error={errors.agencyDigit && errors.agencyDigit.message}
          />
        </div>
      </div>

      <div className={classes.InlineFieldsWrapper}>
        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Conta</M.Text>
          <Input
            control={control}
            name="account"
            error={errors.account && errors.account.message}
          />
        </div>

        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Dígito da conta</M.Text>
          <Input
            control={control}
            name="accountDigit"
            error={errors.accountDigit && errors.accountDigit.message}
          />
        </div>
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">CPF/CNPJ do titular da conta</M.Text>
        <Input
          control={control}
          name="accountHolderFederalDocument"
          mask="cpfOrCnpj"
          error={
            errors.accountHolderFederalDocument &&
            errors.accountHolderFederalDocument.message
          }
        />
      </div>
    </form>
  );
};
