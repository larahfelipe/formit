import * as M from '@mantine/core';
import { Controller } from 'react-hook-form';

import { useStyles } from './styles';
import type { SelectInputProps } from './types';

export const SelectInput = ({
  control,
  name,
  placeholder,
  defaultValue,
  optionsData,
  disabled,
  error,
  ...props
}: SelectInputProps) => {
  const { classes } = useStyles();

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { value = '', onChange } }) => (
          <>
            <datalist id={name}>
              {optionsData.map((option: any) => (
                <option key={option.label} value={option.value}>
                  {option.value}
                </option>
              ))}
            </datalist>
            <input
              className={classes.SelectInput}
              list={name}
              value={value as string}
              placeholder={placeholder}
              onChange={onChange}
              style={{
                borderColor: error && 'red',
                opacity: disabled ? 0.5 : 1
              }}
              disabled={disabled}
              {...props}
            />
          </>
        )}
      />
      {error && (
        <M.Text size="sm" className={classes.ErrorText}>
          {error}
        </M.Text>
      )}
    </>
  );
};
