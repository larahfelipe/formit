import { useEffect } from 'react';

import * as M from '@mantine/core';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { validateCep } from 'validations-br';

import { Input } from '@/components/Input';
import { BRAZILIAN_STATES } from '@/data';
import { Address, useUserStore } from '@/store';

import { useBrasilApi } from '../../hooks/useBrasilApi';
import { FormNames, StepComponentProps, StepsNum } from '../../types';
import { useStyles } from './styles';

export function AddressStep({ onChangeStep }: Readonly<StepComponentProps>) {
  const { classes } = useStyles();
  const { isLoading, getAddressByZipCode, addressData } = useBrasilApi();

  const { control, handleSubmit, watch, setValue } = useFormContext<Address>();

  const setAddress = useUserStore((state) => state.setAddress);

  const onSubmitAddressForm: SubmitHandler<Address> = (formData) => {
    setAddress(formData);
    onChangeStep(StepsNum.THIRD);
  };

  useEffect(() => {
    const subscription = watch(({ zipCode }, { name }) => {
      if (name === 'zipCode') {
        if (zipCode && validateCep(zipCode)) getAddressByZipCode(zipCode);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, getAddressByZipCode]);

  useEffect(() => {
    if (addressData) {
      setValue('streetName', addressData.street);
      setValue('neighborhood', addressData.neighborhood);
      setValue('city', addressData.city);
      setValue('state', addressData.state);
    }
  }, [addressData, setValue]);

  return (
    <form
      id={FormNames.ADDRESS_STEP}
      onSubmit={handleSubmit(onSubmitAddressForm)}
      className={classes.Wrapper}
    >
      <div className={classes.InputWrapper}>
        <M.Text mb="8px">CEP</M.Text>
        <Input
          control={control}
          name="zipCode"
          mask="cep"
          loading={isLoading}
        />
      </div>

      <div className={classes.InlineFieldsWrapper}>
        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Endereço</M.Text>
          <Input
            control={control}
            name="streetName"
            disabled={!!addressData?.street || isLoading}
          />
        </div>

        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Número</M.Text>
          <Input control={control} name="streetNumber" />
        </div>
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Complemento</M.Text>
        <Input control={control} name="complement" placeholder="Opcional" />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Bairro</M.Text>
        <Input
          control={control}
          name="neighborhood"
          disabled={!!addressData?.neighborhood || isLoading}
        />
      </div>

      <div className={classes.InlineFieldsWrapper}>
        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Cidade</M.Text>
          <Input
            control={control}
            name="city"
            disabled={!!addressData?.city || isLoading}
          />
        </div>

        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Estado</M.Text>
          <Input
            type="select"
            control={control}
            name="state"
            data={BRAZILIAN_STATES}
            disabled={!!addressData?.state || isLoading}
          />
        </div>
      </div>
    </form>
  );
}
