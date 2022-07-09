import type { ChangeEvent } from 'react';

import * as M from '@mantine/core';
import { SubmitHandler, useFormContext, Controller } from 'react-hook-form';

import { MIN_DATE_RANGE, MAX_DATE_RANGE, MAX_DATA_SIZE } from '@/common';
import { Input } from '@/components';
import { ProprietaryStep as ProprietaryStepData, useUserStore } from '@/store';
import { useSanitizedStoreData } from '@/utils';

import { useFirebaseStorage } from '../../hooks';
import { StepComponentProps, Steps, FormNames } from '../../types';
import { useStyles } from './styles';

export const ProprietaryStep = ({ onChangeStep }: StepComponentProps) => {
  const { classes } = useStyles();
  const { handleUploadFile } = useFirebaseStorage();
  const { getValue } = useSanitizedStoreData();

  const { control, handleSubmit } = useFormContext<ProprietaryStepData>();

  const setProprietaryStep = useUserStore((state) => state.setProprietaryStep);

  const handleOnChangeFileInput = async (files: FileList) => {
    const filesArray = [...files];
    const sanitizedEnterpriseFederalDocument = getValue(
      'enterprise',
      'federalDocument'
    );

    const result = await Promise.all(
      filesArray.map((file) =>
        handleUploadFile(
          file,
          `${sanitizedEnterpriseFederalDocument}/${file.name}`
        )
      )
    );

    const proprietaryFilesStorageRef = result.map(
      (file) => file?.metadata.fullPath
    );
    return proprietaryFilesStorageRef;
  };

  const handleProprietarySubmit: SubmitHandler<ProprietaryStepData> = (
    formData
  ) => {
    setProprietaryStep(formData);
    onChangeStep(Steps.FOURTH);
  };

  return (
    <form
      id={FormNames.PROPRIETARY_STEP}
      onSubmit={handleSubmit(handleProprietarySubmit)}
      className={classes.Wrapper}
    >
      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Nome completo</M.Text>
        <Input control={control} name="name" />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">CPF</M.Text>
        <Input control={control} name="federalDocument" mask="cpf" />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Data de nascimento</M.Text>
        <Input
          control={control}
          type="date"
          min={MIN_DATE_RANGE}
          max={MAX_DATE_RANGE}
          name="birthDate"
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

      <div className={classes.InputWrapper}>
        <M.Text>Envio de documentação</M.Text>
        <div className={classes.FileInputFieldWrapper}>
          <M.List size="xs" className={classes.RequiredFilesList}>
            <M.ListItem>RG ou CNH do sócio da empresa</M.ListItem>
            <M.ListItem>Cartão CNPJ</M.ListItem>
            <M.ListItem>Comprovante de endereço</M.ListItem>
            <M.ListItem>Comprovante de atividade</M.ListItem>
          </M.List>
          <Controller
            control={control}
            name="filesStorageRef"
            render={({ field: { onChange } }) => (
              <input
                multiple
                type="file"
                maxLength={MAX_DATA_SIZE}
                onChange={async (e: ChangeEvent<any>) =>
                  onChange(await handleOnChangeFileInput(e.target.files))
                }
              />
            )}
          />
        </div>
        <M.Text size="xs" align="right">
          Formatos aceitos: PDF, JPEG e PNG
        </M.Text>
      </div>
    </form>
  );
};
