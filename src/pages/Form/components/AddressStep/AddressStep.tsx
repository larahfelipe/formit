import { useEffect } from 'react';

import * as M from '@mantine/core';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { validateCep } from 'validations-br';

import { Input } from '@/components';
import { BRAZILIAN_STATES } from '@/data';
import { AddressStep as AddressStepData, useUserStore } from '@/store';

import { useBrasilApi } from '../../hooks';
import { FormNames, StepComponentProps, Steps } from '../../types';
import { useStyles } from './styles';

export const AddressStep = ({ onChangeStep }: StepComponentProps) => {
  const { classes } = useStyles();
  const { isLoading, getAddressByZipCode, addressData } = useBrasilApi();

  const { control, handleSubmit, watch, setValue } =
    useFormContext<AddressStepData>();

  const setAddressStep = useUserStore((state) => state.setAddressStep);

  const handleAddressSubmit: SubmitHandler<AddressStepData> = (formData) => {
    setAddressStep(formData);
    onChangeStep(Steps.THIRD);
  };

  const addressZipCode = watch('zipCode');

  useEffect(() => {
    const isValidZipCode = validateCep(addressZipCode);

    if (isValidZipCode) getAddressByZipCode(addressZipCode);
  }, [addressZipCode, getAddressByZipCode]);

  useEffect(() => {
    if (addressData) {
      setValue('publicPlace', addressData.street);
      setValue('district', addressData.neighborhood);
      setValue('city', addressData.city);
      setValue('state', addressData.state);
    }
  }, [addressData, setValue]);

  return (
    <form
      id={FormNames.ADDRESS_STEP}
      onSubmit={handleSubmit(handleAddressSubmit)}
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
            name="publicPlace"
            disabled={!!addressData.street || isLoading}
          />
        </div>

        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Número</M.Text>
          <Input control={control} name="number" />
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
          name="district"
          disabled={!!addressData.neighborhood || isLoading}
        />
      </div>

      <div className={classes.InlineFieldsWrapper}>
        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Cidade</M.Text>
          <Input
            control={control}
            name="city"
            disabled={!!addressData.city || isLoading}
          />
        </div>

        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Estado</M.Text>
          <Input
            type="select"
            control={control}
            name="state"
            data={BRAZILIAN_STATES}
            disabled={!!addressData.state || isLoading}
          />
        </div>
      </div>
    </form>
  );
};
