import type { ChangeEvent } from 'react';

import * as M from '@mantine/core';
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';

import {
  MAX_DATA_SIZE,
  MAX_DATE_RANGE,
  MIN_DATE_RANGE
} from '@/common/constants';
import { Input } from '@/components/Input';
import { Owner as OwnerFormSchema, useUserStore } from '@/store';
import { useSanitizedStoreData } from '@/utils';

import { useFirebaseStorage } from '../../hooks/useFirebaseStorage';
import { FormNames, StepComponentProps, StepsNum } from '../../types';
import { useStyles } from './styles';

export const OwnerStep = ({ onChangeStep }: StepComponentProps) => {
  const { classes } = useStyles();
  const { handleUploadFile } = useFirebaseStorage();
  const { getValue } = useSanitizedStoreData();

  const { control, handleSubmit } = useFormContext<OwnerFormSchema>();

  const setOwner = useUserStore((state) => state.setOwner);

  const handleChangeFileInput = async (files: FileList) => {
    const filesArray = [...files];
    const sanitizedCompanyCnpj = getValue('company', 'cnpj');

    const result = await Promise.all(
      filesArray.map((file) =>
        handleUploadFile(file, `${sanitizedCompanyCnpj}/${file.name}`)
      )
    );

    const ownerFilesUrls = result.map((file) => file?.metadata.fullPath);
    return ownerFilesUrls;
  };

  const onSubmitOwnerForm: SubmitHandler<OwnerFormSchema> = (formData) => {
    setOwner(formData);
    onChangeStep(StepsNum.FOURTH);
  };

  return (
    <form
      id={FormNames.OWNER_STEP}
      onSubmit={handleSubmit(onSubmitOwnerForm)}
      className={classes.Wrapper}
    >
      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Nome completo</M.Text>
        <Input control={control} name="name" />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">CPF</M.Text>
        <Input control={control} name="cpf" mask="cpf" />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Data de nascimento</M.Text>
        <Input
          control={control}
          type="date"
          min={MIN_DATE_RANGE}
          max={MAX_DATE_RANGE}
          name="bornDate"
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

      <div className={classes.InputWrapper}>
        <M.Text>Envio de documentação</M.Text>
        <div className={classes.FileInputFieldWrapper}>
          <M.List size="xs" className={classes.RequiredFilesList}>
            <M.ListItem>RG ou CNH do sócio da empresa</M.ListItem>
            <M.ListItem>Comprovante de endereço</M.ListItem>
            <M.ListItem>Cartão CNPJ</M.ListItem>
          </M.List>

          <Controller
            control={control}
            name="filesUrl"
            render={({ field }) => (
              <input
                multiple
                type="file"
                maxLength={MAX_DATA_SIZE}
                onChange={async (e: ChangeEvent<any>) =>
                  field.onChange(await handleChangeFileInput(e.target.files))
                }
              />
            )}
          />
        </div>
      </div>
    </form>
  );
};
