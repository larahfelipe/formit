import * as M from '@mantine/core';
import { clear } from '@nafuzi/brazilian-masks';
import { SubmitHandler, useFormContext, Controller } from 'react-hook-form';

import { MIN_DATE_RANGE, MAX_DATE_RANGE, MAX_DATA_SIZE } from '@/common';
import { Input } from '@/components';
import { ProprietaryStep as ProprietaryStepData, useUserStore } from '@/store';

import { useFirebaseStorage } from '../../hooks';
import { StepComponentProps, Steps, FormNames } from '../../types';
import { useStyles } from './styles';

export const ProprietaryStep = ({ onChangeStep }: StepComponentProps) => {
  const { classes } = useStyles();
  const { handleUploadFile } = useFirebaseStorage();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useFormContext<ProprietaryStepData>();

  const setProprietaryStep = useUserStore((state) => state.setProprietaryStep);

  const enterpriseFederalDocument = useUserStore(
    (state) => state.enterpriseStep.federalDocument
  );

  const handleOnChangeFileInput = async (files: FileList) => {
    const filesArray = [...files];
    const sanitizedEnterpriseFederalDocument = clear(enterpriseFederalDocument);

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
        <Input
          control={control}
          name="name"
          error={errors.name && errors.name.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">CPF</M.Text>
        <Input
          control={control}
          name="federalDocument"
          mask="cpf"
          error={errors.federalDocument && errors.federalDocument.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Data de nascimento</M.Text>
        <Input
          control={control}
          type="date"
          min={MIN_DATE_RANGE}
          max={MAX_DATE_RANGE}
          name="birthDate"
          error={errors.birthDate && errors.birthDate.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">E-mail</M.Text>
        <Input
          control={control}
          name="email"
          error={errors.email && errors.email.message}
        />
      </div>

      <div className={classes.InputWrapper}>
        <M.Text mb="8px">Telefone</M.Text>
        <Input
          control={control}
          name="phone"
          mask="phone"
          error={errors.phone && errors.phone.message}
        />
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
            render={({ field: { value, onChange } }) => (
              <input
                multiple
                type="file"
                maxLength={MAX_DATA_SIZE}
                value={value}
                onChange={async (e: any) =>
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
