import * as M from '@mantine/core';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { Input, SelectInput } from '@/components';
import { BRAZILIAN_STATES } from '@/data/BrazilianStates';
import { AddressStep as AddressStepData, useUserStore } from '@/store';

import { StepComponentProps, Steps, FormNames } from '../../types';
import { useStyles } from './styles';

export const AddressStep = ({ onChangeStep }: StepComponentProps) => {
  const { classes } = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useFormContext<AddressStepData>();

  const setAddressStep = useUserStore((state) => state.setAddressStep);

  const handleAddressSubmit: SubmitHandler<AddressStepData> = (formData) => {
    setAddressStep(formData);
    onChangeStep(Steps.THIRD);
  };

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
          error={errors.zipCode && errors.zipCode.message}
        />
      </div>

      <div className={classes.InlineFieldsWrapper}>
        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Endereço</M.Text>
          <Input
            control={control}
            name="publicPlace"
            error={errors.publicPlace && errors.publicPlace.message}
          />
        </div>

        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Número</M.Text>
          <Input
            control={control}
            name="number"
            error={errors.number && errors.number.message}
          />
        </div>
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Complemento</M.Text>
        <Input
          control={control}
          name="complement"
          placeholder="Opcional"
          error={errors.complement && errors.complement.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Bairro</M.Text>
        <Input
          control={control}
          name="district"
          error={errors.district && errors.district.message}
        />
      </div>

      <div className={classes.InlineFieldsWrapper}>
        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Cidade</M.Text>
          <Input
            control={control}
            name="city"
            error={errors.city && errors.city.message}
          />
        </div>

        <div className={classes.InputWrapper}>
          <M.Text mb="8px">Estado</M.Text>
          <SelectInput
            control={control}
            name="state"
            optionsData={BRAZILIAN_STATES}
            error={errors.state && errors.state.message}
          />
        </div>
      </div>
    </form>
  );
};
