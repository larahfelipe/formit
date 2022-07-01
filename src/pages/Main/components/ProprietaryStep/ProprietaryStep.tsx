import * as M from '@mantine/core';
import { Dropzone, MIME_TYPES, DropzoneStatus } from '@mantine/dropzone';
import { SubmitHandler, useFormContext, Controller } from 'react-hook-form';

import { MIN_DATE_RANGE, MAX_DATE_RANGE, MAX_DATA_SIZE } from '@/common';
import { Input } from '@/components';
import { ProprietaryStep as ProprietaryStepData, useUserStore } from '@/store';

import { StepComponentProps, Steps, FormNames } from '../../types';
import { useStyles } from './styles';

export const ProprietaryStep = ({ onChangeStep }: StepComponentProps) => {
  const { classes } = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useFormContext<ProprietaryStepData>();

  const setProprietaryStep = useUserStore((state) => state.setProprietaryStep);

  const handleAddressSubmit: SubmitHandler<ProprietaryStepData> = (
    formData
  ) => {
    setProprietaryStep(formData);
    onChangeStep(Steps.FOURTH);
  };

  return (
    <form
      id={FormNames.PROPRIETARY_STEP}
      onSubmit={handleSubmit(handleAddressSubmit)}
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
        <div className={classes.DropzoneLabelWrapper}>
          <M.Text>Documentação</M.Text>
          <M.Text size="xs" mb="8px">
            Tipos de arquivos aceitos: PDF, JPEG e PNG
          </M.Text>
        </div>
        <Controller
          control={control}
          name="files"
          render={({ field: { value, onChange } }) => (
            <Dropzone
              multiple
              value={value}
              onDrop={(file: File) => {
                const blob = new Blob([file], { type: MIME_TYPES.jpeg });
                const fileReader = new FileReader();
                fileReader.onload = (e: any) => {
                  const result = e.target.result;
                  const result2 = btoa(result);
                  onChange(result2);
                  console.log(result2);
                };
                fileReader.readAsDataURL(blob);
              }}
              onReject={(file: File) =>
                console.error('Rejected file(s): ', file)
              }
              maxSize={MAX_DATA_SIZE}
              accept={[MIME_TYPES.pdf, MIME_TYPES.jpeg, MIME_TYPES.png]}
            >
              {(status: DropzoneStatus) => (
                <div className={classes.DropzoneFieldWrapper}>
                  {status.accepted ? (
                    <M.Text>Arquivos enviados</M.Text>
                  ) : (
                    <M.Text>Selecionar arquivos</M.Text>
                  )}
                </div>
              )}
            </Dropzone>
          )}
        />
        <M.List size="xs">
          <M.ListItem>RG ou CNH do sócio da empresa</M.ListItem>
          <M.ListItem>Cartão CNPJ</M.ListItem>
          <M.ListItem>Comprovante de endereço</M.ListItem>
          <M.ListItem>Comprovante de atividade</M.ListItem>
        </M.List>
      </div>
    </form>
  );
};
