import * as M from '@mantine/core';
import masks from '@nafuzi/brazilian-masks';
import { Controller } from 'react-hook-form';

import { useStyles } from './styles';
import type { InputProps, CallbackFunction } from './types';

export const Input = <TData,>({
  control,
  name,
  type = 'text',
  placeholder,
  defaultValue,
  mask,
  error,
  disabled,
  ...props
}: InputProps<TData>) => {
  const { classes } = useStyles();

  const handleChange = (cb: CallbackFunction) => {
    return (event: JSX.TargetedEvent) => {
      const value = (event.target as HTMLInputElement).value;
      mask ? cb(masks[mask](value)) : cb(value);
    };
  };

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { value = '', onChange, onBlur } }) => (
          <input
            className={classes.Input}
            type={type}
            value={value as string}
            onBlur={handleChange(onBlur)}
            onChange={handleChange(onChange)}
            placeholder={placeholder}
            style={{
              borderColor: error && 'red',
              opacity: disabled ? 0.5 : 1
            }}
            disabled={disabled}
            {...props}
          />
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
