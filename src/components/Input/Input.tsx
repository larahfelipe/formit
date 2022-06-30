import * as M from '@mantine/core';
import masks from '@nafuzi/brazilian-masks';
import { Controller } from 'react-hook-form';

import { useStyles } from './styles';
import type { InputProps, CallbackFunction } from './types';

export const Input = <T,>({
  control,
  name,
  type = 'text',
  data,
  placeholder,
  defaultValue,
  mask,
  error,
  disabled,
  ...props
}: InputProps<T>) => {
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
          <>
            {type === 'select' && data?.length && (
              <datalist id={name}>
                {data.map((item) => (
                  <option key={item.label} value={item.value}>
                    {item.value}
                  </option>
                ))}
              </datalist>
            )}

            <input
              className={classes.Input}
              type={type}
              list={type === 'select' ? name : undefined}
              placeholder={placeholder}
              value={value as string}
              onBlur={handleChange(onBlur)}
              onChange={handleChange(onChange)}
              disabled={disabled}
              style={{
                borderColor: error && 'red',
                opacity: disabled ? 0.5 : 1,
                cursor: disabled ? 'not-allowed' : 'inherit'
              }}
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
